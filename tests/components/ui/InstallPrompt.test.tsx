import { render, screen, fireEvent, act } from '@testing-library/react';
import { InstallPrompt } from '@/components/ui/InstallPrompt';
import { usePWAInstall } from '@/hooks/usePWAInstall';

vi.mock('@/hooks/usePWAInstall');

const mockInstall = vi.fn();

vi.mocked(usePWAInstall).mockReturnValue({
  canInstall: true,
  install: mockInstall,
});

describe('InstallPrompt', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('does not render initially', () => {
    render(<InstallPrompt />);
    expect(screen.queryByText('Install App')).not.toBeInTheDocument();
  });

  it('renders after delay when canInstall is true', async () => {
    render(<InstallPrompt />);
    await act(async () => {
      vi.advanceTimersByTime(3000);
    });
    expect(screen.getByText('Install App')).toBeInTheDocument();
  });

  it('calls install function when install button is clicked', async () => {
    render(<InstallPrompt />);
    await act(async () => {
      vi.advanceTimersByTime(3000);
    });
    fireEvent.click(screen.getByText('Install'));
    expect(mockInstall).toHaveBeenCalledTimes(1);
  });

  it('hides prompt when later button is clicked', async () => {
    render(<InstallPrompt />);
    await act(async () => {
      vi.advanceTimersByTime(3000);
    });
    fireEvent.click(screen.getByText('Later'));
    expect(screen.queryByText('Install App')).not.toBeInTheDocument();
  });
});