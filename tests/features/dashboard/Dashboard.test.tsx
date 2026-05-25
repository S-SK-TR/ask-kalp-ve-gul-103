import { render, screen } from '@testing-library/react';
import { Dashboard } from '@/features/dashboard/Dashboard';

describe('Dashboard', () => {
  it('renders all metric cards', () => {
    render(<Dashboard />);

    // Check if all metric cards are rendered
    expect(screen.getByText('Memories')).toBeInTheDocument();
    expect(screen.getByText('SunSafe')).toBeInTheDocument();
    expect(screen.getByText('Soundscapes')).toBeInTheDocument();
    expect(screen.getByText('Planner')).toBeInTheDocument();

    // Check metric values
    expect(screen.getByText('128')).toBeInTheDocument();
    expect(screen.getByText('82%')).toBeInTheDocument();
    expect(screen.getByText('4')).toBeInTheDocument();
    expect(screen.getByText('3')).toBeInTheDocument();
  });
});