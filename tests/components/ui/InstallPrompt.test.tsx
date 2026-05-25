import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { InstallPrompt } from '@/components/ui/InstallPrompt';
import { usePWAInstall } from '@/hooks/usePWAInstall';

vi.mock('@/hooks/usePWAInstall');

const mockInstall = vi.fn();

beforeEach(() => {
  vi.useFakeTimers();
  (usePWAInstall as jest.Mock).mockReturnValue({
    canInstall: true,
    install: mockInstall,
  });
});

afterEach(() => {
  vi.useRealTimers();
});

describe('InstallPrompt Component', () => {
  it('does not render when canInstall is false', () => {
    (usePWAInstall as jest.Mock).mockReturnValueOnce({ canInstall: false });
    render(<InstallPrompt />);
    expect(screen.queryByText('Install App')).not.toBeInTheDocument();
  });

  it('renders after delay when canInstall is true', async () => {
    render(<InstallPrompt />);
    expect(screen.queryByText('Install App')).not.toBeInTheDocument();
    vi.advanceTimersByTime(3000);
    await waitFor(() => {
      expect(screen.getByText('Install App')).toBeInTheDocument();
    });
  });

  it('calls install function when Install button is clicked', async () => {
    render(<InstallPrompt />);
    vi.advanceTimersByTime(3000);
    await waitFor(() => {
      fireEvent.click(screen.getByText('Install'));
      expect(mockInstall).toHaveBeenCalledTimes(1);
    });
  });

  it('hides prompt when Later button is clicked', async () => {
    render(<InstallPrompt />);
    vi.advanceTimersByTime(3000);
    await waitFor(() => {
      fireEvent.click(screen.getByText('Later'));
      expect(screen.queryByText('Install App')).not.toBeInTheDocument();
    });
  });
});