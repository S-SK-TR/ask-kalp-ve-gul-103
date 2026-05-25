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

  it('renders with icon', () => {
    render(
      <MetricCard
        title="Likes"
        value="1,234"
        icon={Heart}
      />
    );

    expect(screen.getByTestId('heart-icon')).toBeInTheDocument();
  });

  it('renders with delta indicator', () => {
    render(
      <MetricCard
        title="Likes"
        value="1,234"
        delta={5}
        icon={Heart}
      />
    );

    expect(screen.getByText('5%')).toBeInTheDocument();
    expect(screen.getByTestId('trending-up-icon')).toBeInTheDocument();
  });

  it('renders negative delta indicator', () => {
    render(
      <MetricCard
        title="Likes"
        value="1,234"
        delta={-3}
        icon={Heart}
      />
    );

    expect(screen.getByText('3%')).toBeInTheDocument();
    expect(screen.getByTestId('trending-down-icon')).toBeInTheDocument();
  });

  it('renders with different variants', () => {
    const { rerender } = render(
      <MetricCard
        title="Likes"
        value="1,234"
        icon={Heart}
        variant="default"
      />
    );

    expect(screen.getByTestId('heart-icon').parentElement).toHaveClass('bg-blue-500/10');

    rerender(
      <MetricCard
        title="Likes"
        value="1,234"
        icon={Heart}
        variant="success"
      />
    );

    expect(screen.getByTestId('heart-icon').parentElement).toHaveClass('bg-emerald-500/10');

    rerender(
      <MetricCard
        title="Likes"
        value="1,234"
        icon={Heart}
        variant="danger"
      />
    );

    expect(screen.getByTestId('heart-icon').parentElement).toHaveClass('bg-rose-500/10');
  });
});