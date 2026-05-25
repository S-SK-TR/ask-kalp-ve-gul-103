import { render, screen } from '@testing-library/react';
import { MetricCard } from '@/components/ui/MetricCard';
import { Heart } from 'lucide-react';

describe('MetricCard', () => {
  it('renders with correct props', () => {
    render(
      <MetricCard
        title="Test Metric"
        value="100"
        delta={5}
        icon={Heart}
        variant="success"
      />
    );

    expect(screen.getByText('Test Metric')).toBeInTheDocument();
    expect(screen.getByText('100')).toBeInTheDocument();
    expect(screen.getByText('5%')).toBeInTheDocument();
    expect(screen.getByTestId('heart-icon')).toBeInTheDocument();
  });

  it('shows positive delta with up arrow', () => {
    render(<MetricCard title="Test" value="100" delta={5} icon={Heart} />);
    expect(screen.getByTestId('trending-up-icon')).toBeInTheDocument();
  });

  it('shows negative delta with down arrow', () => {
    render(<MetricCard title="Test" value="100" delta={-3} icon={Heart} />);
    expect(screen.getByTestId('trending-down-icon')).toBeInTheDocument();
  });
});