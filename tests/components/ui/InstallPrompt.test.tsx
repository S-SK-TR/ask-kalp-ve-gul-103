import { render, screen, fireEvent, act } from '@testing-library/react';
import { InstallPrompt } from '@/components/ui/InstallPrompt';
import { usePWAInstall } from '@/hooks/usePWAInstall';

vi.mock('@/hooks/usePWAInstall');

const mockInstall = vi.fn();

const mockUsePWAInstall = (canInstall: boolean) => {
  (usePWAInstall as jest.Mock).mockReturnValue({
    canInstall,
    install: mockInstall
  });
};

describe('InstallPrompt Component', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
    vi.clearAllMocks();
  });

  it('does not render when canInstall is false', () => {
    mockUsePWAInstall(false);
    render(<InstallPrompt />);
    expect(screen.queryByText('Install App')).not.toBeInTheDocument();
  });

  it('renders after delay when canInstall is true', async () => {
    mockUsePWAInstall(true);
    render(<InstallPrompt />);

    // Initially not rendered
    expect(screen.queryByText('Install App')).not.toBeInTheDocument();

    // Fast-forward time
    await act(async () => {
      vi.advanceTimersByTime(3000);
    });

    expect(screen.getByText('Install App')).toBeInTheDocument();
  });

  it('calls install function when Install button is clicked', async () => {
    mockUsePWAInstall(true);
    render(<InstallPrompt />);

    await act(async () => {
      vi.advanceTimersByTime(3000);
    });

    fireEvent.click(screen.getByText('Install'));
    expect(mockInstall).toHaveBeenCalledTimes(1);
  });

  it('hides prompt when Later button is clicked', async () => {
    mockUsePWAInstall(true);
    render(<InstallPrompt />);

    await act(async () => {
      vi.advanceTimersByTime(3000);
    });

    fireEvent.click(screen.getByText('Later'));
    expect(screen.queryByText('Install App')).not.toBeInTheDocument();
  });
});