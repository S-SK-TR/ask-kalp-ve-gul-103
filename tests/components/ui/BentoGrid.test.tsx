import { render, screen } from '@testing-library/react';
import { BentoGrid } from '@/components/ui/BentoGrid';

describe('BentoGrid', () => {
  it('renders children correctly', () => {
    render(
      <BentoGrid>
        <div>Item 1</div>
        <div>Item 2</div>
      </BentoGrid>
    );
    expect(screen.getByText('Item 1')).toBeInTheDocument();
    expect(screen.getByText('Item 2')).toBeInTheDocument();
  });

  it('applies the correct grid classes', () => {
    const { container } = render(
      <BentoGrid>
        <div>Item 1</div>
      </BentoGrid>
    );
    expect(container.firstChild).toHaveClass('grid');
    expect(container.firstChild).toHaveClass('grid-cols-1');
    expect(container.firstChild).toHaveClass('md:grid-cols-2');
    expect(container.firstChild).toHaveClass('lg:grid-cols-4');
  });
});