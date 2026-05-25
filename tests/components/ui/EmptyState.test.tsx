import { render, screen, fireEvent } from '@testing-library/react';
import { EmptyState } from '@/components/ui/EmptyState';
import { Heart } from 'lucide-react';

describe('EmptyState Component', () => {
  it('renders title and description', () => {
    render(
      <EmptyState
        title="No Data"
        description="There is no data available"
      />
    );

    expect(screen.getByText('No Data')).toBeInTheDocument();
    expect(screen.getByText('There is no data available')).toBeInTheDocument();
  });

  it('renders with icon when provided', () => {
    render(
      <EmptyState
        title="No Data"
        description="There is no data available"
        icon={<Heart />}
      />
    );

    expect(screen.getByTestId('heart-icon')).toBeInTheDocument();
  });

  it('renders action button when provided', () => {
    const handleAction = vi.fn();
    render(
      <EmptyState
        title="No Data"
        description="There is no data available"
        actionText="Add Data"
        onAction={handleAction}
      />
    );

    const actionButton = screen.getByText('Add Data');
    expect(actionButton).toBeInTheDocument();
    fireEvent.click(actionButton);
    expect(handleAction).toHaveBeenCalledTimes(1);
  });
});