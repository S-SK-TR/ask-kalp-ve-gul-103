import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { AppShell } from '@/components/layout/AppShell';

describe('AppShell', () => {
  it('renders the sidebar with navigation items', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <AppShell />
      </MemoryRouter>
    );
    expect(screen.getByText('Dashboard')).toBeInTheDocument();
    expect(screen.getByText('Planner')).toBeInTheDocument();
    expect(screen.getByText('Memories')).toBeInTheDocument();
    expect(screen.getByText('SunSafe')).toBeInTheDocument();
    expect(screen.getByText('Soundscapes')).toBeInTheDocument();
  });

  it('renders the mobile bottom navigation', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <AppShell />
      </MemoryRouter>
    );
    expect(screen.getByText('Dashboard')).toBeInTheDocument();
    expect(screen.getByText('Planner')).toBeInTheDocument();
  });

  it('highlights the active route', () => {
    render(
      <MemoryRouter initialEntries={['/planner']}>
        <AppShell />
      </MemoryRouter>
    );
    expect(screen.getByText('Planner').closest('a')).toHaveClass('bg-blue-500/10');
  });
});