import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '@/App';

describe('App', () => {
  it('renders the AppShell component', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText('Aşk: Kalp ve Gül')).toBeInTheDocument();
  });

  it('renders all navigation routes', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText('Dashboard')).toBeInTheDocument();
    expect(screen.getByText('Planner')).toBeInTheDocument();
    expect(screen.getByText('Memories')).toBeInTheDocument();
    expect(screen.getByText('SunSafe')).toBeInTheDocument();
    expect(screen.getByText('Soundscapes')).toBeInTheDocument();
  });
});