import { render, screen } from '@testing-library/react';
import { PageContainer } from '@/components/layout/PageContainer';

describe('PageContainer Component', () => {
  it('renders children correctly', () => {
    render(
      <PageContainer>
        <div data-testid="child-element">Test Content</div>
      </PageContainer>
    );

    expect(screen.getByTestId('child-element')).toBeInTheDocument();
  });

  it('renders title and description when provided', () => {
    render(
      <PageContainer title="Test Title" description="Test Description">
        <div>Content</div>
      </PageContainer>
    );

    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('Test Description')).toBeInTheDocument();
  });

  it('renders actions when provided', () => {
    render(
      <PageContainer actions={<button data-testid="action-button">Action</button>}>
        <div>Content</div>
      </PageContainer>
    );

    expect(screen.getByTestId('action-button')).toBeInTheDocument();
  });
});