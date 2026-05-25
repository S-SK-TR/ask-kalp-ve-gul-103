import { render, screen } from '@testing-library/react';
import { GlassCard } from '@/components/ui/GlassCard';

describe('GlassCard Component', () => {
  it('renders children correctly', () => {
    render(
      <GlassCard>
        <div data-testid="card-content">Card Content</div>
      </GlassCard>
    );

    expect(screen.getByTestId('card-content')).toBeInTheDocument();
  });

  it('applies glass-card class', () => {
    const { container } = render(<GlassCard />);
    expect(container.firstChild).toHaveClass('glass-card');
  });
});