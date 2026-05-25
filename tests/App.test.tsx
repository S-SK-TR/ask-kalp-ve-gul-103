import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '@/App';

describe('App', () => {
  it('renders AppShell and routes correctly', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );

    // Check if AppShell is rendered
    expect(screen.getByText('Aşk: Kalp ve Gül')).toBeInTheDocument();

    // Check if all routes are present in the navigation
    expect(screen.getByText('Dashboard')).toBeInTheDocument();
    expect(screen.getByText('Planner')).toBeInTheDocument();
    expect(screen.getByText('Memories')).toBeInTheDocument();
    expect(screen.getByText('SunSafe')).toBeInTheDocument();
    expect(screen.getByText('Soundscapes')).toBeInTheDocument();
  });
});