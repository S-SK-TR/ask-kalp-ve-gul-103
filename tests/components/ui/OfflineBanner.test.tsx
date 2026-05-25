import { render, screen, fireEvent } from '@testing-library/react';
import { OfflineBanner } from '@/components/ui/OfflineBanner';

describe('OfflineBanner', () => {
  beforeEach(() => {
    Object.defineProperty(navigator, 'onLine', {
      value: true,
      writable: true,
    });
  });

  it('does not render when online', () => {
    render(<OfflineBanner />);
    expect(screen.queryByText('Çevrimdışı')).not.toBeInTheDocument();
  });

  it('renders when offline', () => {
    Object.defineProperty(navigator, 'onLine', {
      value: false,
      writable: true,
    });
    render(<OfflineBanner />);
    expect(screen.getByText('Çevrimdışı')).toBeInTheDocument();
  });

  it('updates when network status changes', () => {
    render(<OfflineBanner />);
    expect(screen.queryByText('Çevrimdışı')).not.toBeInTheDocument();

    // Simulate going offline
    Object.defineProperty(navigator, 'onLine', {
      value: false,
      writable: true,
    });
    fireEvent(window, new Event('offline'));
    expect(screen.getByText('Çevrimdışı')).toBeInTheDocument();

    // Simulate going online
    Object.defineProperty(navigator, 'onLine', {
      value: true,
      writable: true,
    });
    fireEvent(window, new Event('online'));
    expect(screen.queryByText('Çevrimdışı')).not.toBeInTheDocument();
  });
});