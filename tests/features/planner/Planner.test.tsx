import { render, screen } from '@testing-library/react';
import { Planner } from '@/features/planner/Planner';

describe('Planner', () => {
  it('renders all events', () => {
    render(<Planner />);

    // Check if all events are rendered
    expect(screen.getByText('Anniversary')).toBeInTheDocument();
    expect(screen.getByText('Dinner Date')).toBeInTheDocument();
    expect(screen.getByText('Movie Night')).toBeInTheDocument();

    // Check event details
    expect(screen.getByText('2024-06-15 • 19:00 • Restaurant')).toBeInTheDocument();
    expect(screen.getByText('2024-06-20 • 18:30 • Home')).toBeInTheDocument();
  });

  it('has New Event button', () => {
    render(<Planner />);
    expect(screen.getByText('New Event')).toBeInTheDocument();
  });
});