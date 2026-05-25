import { render, screen } from '@testing-library/react';
import { PageContainer } from '@/components/layout/PageContainer';

describe('PageContainer', () => {
  it('renders with title and description', () => {
    render(
      <PageContainer title="Test Title" description="Test Description">
        <div>Test Content</div>
      </PageContainer>
    );

    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('Test Description')).toBeInTheDocument();
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  it('renders with actions', () => {
    render(
      <PageContainer title="Test" actions={<button>Action Button</button>}>
        <div>Content</div>
      </PageContainer>
    );

    expect(screen.getByText('Action Button')).toBeInTheDocument();
  });
});