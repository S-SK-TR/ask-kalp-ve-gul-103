import { render, screen } from '@testing-library/react';
import { LoadingSpinner } from '@/components/ui/LoadingSpinner';

describe('LoadingSpinner Component', () => {
  it('renders with default size', () => {
    render(<LoadingSpinner />);
    const spinner = screen.getByTestId('loader-icon');
    expect(spinner).toHaveClass('h-6');
    expect(spinner).toHaveClass('w-6');
  });

  it('renders with different sizes', () => {
    const { rerender } = render(<LoadingSpinner size="sm" />);
    expect(screen.getByTestId('loader-icon')).toHaveClass('h-4');

    rerender(<LoadingSpinner size="md" />);
    expect(screen.getByTestId('loader-icon')).toHaveClass('h-6');

    rerender(<LoadingSpinner size="lg" />);
    expect(screen.getByTestId('loader-icon')).toHaveClass('h-8');
  });
});