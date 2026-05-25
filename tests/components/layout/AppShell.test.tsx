import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { AppShell } from '@/components/layout/AppShell';

describe('AppShell Component', () => {
  it('renders the sidebar with navigation items', () => {
    render(
      <MemoryRouter initialEntries={[ '/' ]}>
        <AppShell />
      </MemoryRouter>
    );

    // Check sidebar elements
    expect(screen.getByText('Aşk: Kalp ve Gül')).toBeInTheDocument();
    expect(screen.getByText('Dashboard')).toBeInTheDocument();
    expect(screen.getByText('Planner')).toBeInTheDocument();
    expect(screen.getByText('Memories')).toBeInTheDocument();
    expect(screen.getByText('SunSafe')).toBeInTheDocument();
    expect(screen.getByText('Soundscapes')).toBeInTheDocument();
  });

  it('renders the mobile bottom navigation', () => {
    render(
      <MemoryRouter initialEntries={[ '/' ]}>
        <AppShell />
      </MemoryRouter>
    );

    // Check mobile nav items
    expect(screen.getAllByText('Dashboard').length).toBeGreaterThan(1);
    expect(screen.getAllByText('Planner').length).toBeGreaterThan(1);
  });

  it('highlights the active navigation item', () => {
    render(
      <MemoryRouter initialEntries={[ '/planner' ]}>
        <AppShell />
      </MemoryRouter>
    );

    // Check active state
    expect(screen.getByText('Planner').closest('a')).toHaveClass('text-blue-500');
  });
});