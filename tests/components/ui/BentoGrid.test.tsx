import { render, screen } from '@testing-library/react';
import { BentoGrid } from '@/components/ui/BentoGrid';

describe('BentoGrid Component', () => {
  it('renders children correctly', () => {
    render(
      <BentoGrid>
        <div data-testid="grid-item-1">Item 1</div>
        <div data-testid="grid-item-2">Item 2</div>
      </BentoGrid>
    );

    expect(screen.getByTestId('grid-item-1')).toBeInTheDocument();
    expect(screen.getByTestId('grid-item-2')).toBeInTheDocument();
  });

  it('applies responsive grid classes', () => {
    const { container } = render(<BentoGrid />);

    expect(container.firstChild).toHaveClass('grid');
    expect(container.firstChild).toHaveClass('grid-cols-1');
    expect(container.firstChild).toHaveClass('md:grid-cols-2');
    expect(container.firstChild).toHaveClass('lg:grid-cols-4');
  });
});