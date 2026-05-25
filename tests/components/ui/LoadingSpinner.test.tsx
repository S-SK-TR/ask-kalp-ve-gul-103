import { render, screen } from '@testing-library/react';
import { LoadingSpinner } from '@/components/ui/LoadingSpinner';

describe('LoadingSpinner', () => {
  it('renders with default size', () => {
    render(<LoadingSpinner />);
    const spinner = screen.getByTestId('loading-spinner');
    expect(spinner).toHaveClass('h-6');
    expect(spinner).toHaveClass('w-6');
  });

  it('renders with different sizes', () => {
    const { rerender } = render(<LoadingSpinner size="sm" />);
    expect(screen.getByTestId('loading-spinner')).toHaveClass('h-4');

    rerender(<LoadingSpinner size="md" />);
    expect(screen.getByTestId('loading-spinner')).toHaveClass('h-6');

    rerender(<LoadingSpinner size="lg" />);
    expect(screen.getByTestId('loading-spinner')).toHaveClass('h-8');
  });
});