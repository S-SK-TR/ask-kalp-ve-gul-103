import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../src/App';

describe('App Component', () => {
  it('renders correctly with title and message', () => {
    render(<App />);
    
    // Başlık render edildi mi?
    expect(screen.getByText('Aşk: Kalp ve Gül')).toBeInTheDocument();
    
    // Başarı mesajı render edildi mi?
    expect(screen.getByText('Uygulama başarıyla oluşturuldu!')).toBeInTheDocument();
  });

  it('has correct styling', () => {
    render(<App />);
    const container = screen.getByText('Aşk: Kalp ve Gül').parentElement;
    
    // Stil kontrolü
    expect(container).toHaveStyle('textAlign: center');
    expect(container).toHaveStyle('marginTop: 5rem');
  });
});
