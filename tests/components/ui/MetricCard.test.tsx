import { render, screen } from '@testing-library/react';
import { MetricCard } from '@/components/ui/MetricCard';
import { Heart } from 'lucide-react';

describe('MetricCard Component', () => {
  it('renders title and value', () => {
    render(
      <MetricCard
        title="Likes"
        value="1,234"
        icon={Heart}
      />
    );

    expect(screen.getByText('Likes')).toBeInTheDocument();
    expect(screen.getByText('1,234')).toBeInTheDocument();
  });

  it('renders with different variants', () => {
    const { rerender } = render(
      <MetricCard
        title="Success"
        value="100"
        variant="success"
        icon={Heart}
      />
    );
    expect(screen.getByTestId('heart-icon').closest('div')).toHaveClass('bg-emerald-500/10');

    rerender(
      <MetricCard
        title="Danger"
        value="50"
        variant="danger"
        icon={Heart}
      />
    );
    expect(screen.getByTestId('heart-icon').closest('div')).toHaveClass('bg-rose-500/10');

    rerender(
      <MetricCard
        title="Default"
        value="75"
        variant="default"
        icon={Heart}
      />
    );
    expect(screen.getByTestId('heart-icon').closest('div')).toHaveClass('bg-blue-500/10');
  });

  it('renders delta indicator when provided', () => {
    const { rerender } = render(
      <MetricCard
        title="Positive"
        value="100"
        delta={10}
        icon={Heart}
      />
    );
    expect(screen.getByTestId('trending-up-icon')).toBeInTheDocument();
    expect(screen.getByText('10%')).toBeInTheDocument();

    rerender(
      <MetricCard
        title="Negative"
        value="50"
        delta={-5}
        icon={Heart}
      />
    );
    expect(screen.getByTestId('trending-down-icon')).toBeInTheDocument();
    expect(screen.getByText('5%')).toBeInTheDocument();
  });
});