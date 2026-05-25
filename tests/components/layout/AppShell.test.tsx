import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { AppShell } from '@/components/layout/AppShell';

describe('AppShell', () => {
  it('renders all navigation items', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <AppShell />
      </MemoryRouter>
    );

    // Check desktop sidebar items
    expect(screen.getByText('Dashboard')).toBeInTheDocument();
    expect(screen.getByText('Planner')).toBeInTheDocument();
    expect(screen.getByText('Memories')).toBeInTheDocument();
    expect(screen.getByText('SunSafe')).toBeInTheDocument();
    expect(screen.getByText('Soundscapes')).toBeInTheDocument();

    // Check mobile bottom navigation items
    expect(screen.getAllByText('Dashboard').length).toBeGreaterThan(1);
    expect(screen.getAllByText('Planner').length).toBeGreaterThan(1);
  });

  it('highlights active route', () => {
    render(
      <MemoryRouter initialEntries={['/planner']}>
        <AppShell />
      </MemoryRouter>
    );

    // Check if Planner is active in both navs
    const activeItems = screen.getAllByText('Planner');
    activeItems.forEach(item => {
      expect(item).toHaveClass('text-blue-500');
    });
  });
});