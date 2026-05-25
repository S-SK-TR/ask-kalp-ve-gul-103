import { PageContainer } from '@/components/layout/PageContainer';
import { Button } from '@/components/ui/Button';
import { Sun } from 'lucide-react';

const sunscreenData = [
  { id: '1', name: 'SPF 50+', type: 'Lotion', expiration: '2025-06-15' },
  { id: '2', name: 'SPF 30', type: 'Spray', expiration: '2024-12-31' },
  { id: '3', name: 'After Sun', type: 'Gel', expiration: '2025-03-20' },
];

export function SunSafe() {
  return (
    <PageContainer
      title="SunSafe"
      description="Track your sunscreen inventory"
      actions={<Button icon={Sun}>Add Product</Button>}
    >
      <div className="space-y-4">
        {sunscreenData.map((item) => (
          <div key={item.id} className="glass-card p-4 rounded-xl">
            <h3 className="font-semibold">{item.name}</h3>
            <p className="text-sm text-[var(--text-muted)]">
              {item.type} • Expires: {item.expiration}
            </p>
          </div>
        ))}
      </div>
    </PageContainer>
  );
}