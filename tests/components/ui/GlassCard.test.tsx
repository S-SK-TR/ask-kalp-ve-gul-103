import { render, screen } from '@testing-library/react';
import { GlassCard } from '@/components/ui/GlassCard';

describe('GlassCard Component', () => {
  it('renders children correctly', () => {
    render(
      <GlassCard>
        <div>Test Content</div>
      </GlassCard>
    );

    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  it('applies glass-card class', () => {
    const { container } = render(
      <GlassCard>
        <div>Test Content</div>
      </GlassCard>
    );

    expect(container.firstChild).toHaveClass('glass-card');
  });
});