import { render, screen, fireEvent } from '@testing-library/react';
import { ErrorBoundary } from '@/components/ui/ErrorBoundary';

const ProblemChild = () => {
  throw new Error('Test error');
  return <div>This should not render</div>;
};

describe('ErrorBoundary', () => {
  it('renders children when there is no error', () => {
    render(
      <ErrorBoundary>
        <div>Normal content</div>
      </ErrorBoundary>
    );
    expect(screen.getByText('Normal content')).toBeInTheDocument();
  });

  it('renders fallback UI when there is an error', () => {
    render(
      <ErrorBoundary>
        <ProblemChild />
      </ErrorBoundary>
    );
    expect(screen.getByText('Something went wrong')).toBeInTheDocument();
    expect(screen.getByText('Try Again')).toBeInTheDocument();
  });

  it('resets error boundary when clicking try again', () => {
    const { rerender } = render(
      <ErrorBoundary>
        <ProblemChild />
      </ErrorBoundary>
    );

    fireEvent.click(screen.getByText('Try Again'));

    rerender(
      <ErrorBoundary>
        <div>Normal content</div>
      </ErrorBoundary>
    );

    expect(screen.getByText('Normal content')).toBeInTheDocument();
  });
});