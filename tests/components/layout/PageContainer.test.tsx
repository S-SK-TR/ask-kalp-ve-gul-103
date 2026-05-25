import { render, screen } from '@testing-library/react';
import { PageContainer } from '@/components/layout/PageContainer';

describe('PageContainer Component', () => {
  it('renders children correctly', () => {
    render(
      <PageContainer>
        <div>Test Content</div>
      </PageContainer>
    );

    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  it('renders title and description when provided', () => {
    render(
      <PageContainer title="Test Title" description="Test Description">
        <div>Test Content</div>
      </PageContainer>
    );

    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('Test Description')).toBeInTheDocument();
  });

  it('renders actions when provided', () => {
    const actions = <button>Test Action</button>;
    render(
      <PageContainer actions={actions}>
        <div>Test Content</div>
      </PageContainer>
    );

    expect(screen.getByText('Test Action')).toBeInTheDocument();
  });
});