import { render, screen } from '@testing-library/react';
import { GlassCard } from '@/components/ui/GlassCard';

describe('GlassCard', () => {
  it('renders children correctly', () => {
    render(
      <GlassCard>
        <div>Card Content</div>
      </GlassCard>
    );
    expect(screen.getByText('Card Content')).toBeInTheDocument();
  });

  it('applies glass-card class', () => {
    const { container } = render(
      <GlassCard>
        <div>Card Content</div>
      </GlassCard>
    );
    expect(container.firstChild).toHaveClass('glass-card');
  });
});