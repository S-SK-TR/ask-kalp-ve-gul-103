import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { AppShell } from '@/components/layout/AppShell';

describe('AppShell Component', () => {
  it('renders all navigation items', () => {
    render(
      <MemoryRouter initialEntries={[ '/' ]}>
        <AppShell />
      </MemoryRouter>
    );

    // Check desktop sidebar items
    expect(screen.getByText('Dashboard')).toBeInTheDocument();
    expect(screen.getByText('Planner')).toBeInTheDocument();
    expect(screen.getByText('Memories')).toBeInTheDocument();
    expect(screen.getByText('SunSafe')).toBeInTheDocument();
    expect(screen.getByText('Soundscapes')).toBeInTheDocument();

    // Check mobile bottom nav items
    expect(screen.getAllByText('Dashboard').length).toBeGreaterThan(1);
  });

  it('highlights active route', () => {
    render(
      <MemoryRouter initialEntries={[ '/planner' ]}>
        <AppShell />
      </MemoryRouter>
    );

    const activeItem = screen.getByText('Planner').closest('a');
    expect(activeItem).toHaveClass('bg-blue-500/10');
  });

  it('renders user profile section', () => {
    render(
      <MemoryRouter initialEntries={[ '/' ]}>
        <AppShell />
      </MemoryRouter>
    );

    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('john@example.com')).toBeInTheDocument();
  });
});