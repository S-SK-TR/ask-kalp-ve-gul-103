import { PageContainer } from '@/components/layout/PageContainer';
import { Button } from '@/components/ui/Button';
import { Plus } from 'lucide-react';

const memories = [
  { id: '1', title: 'First Date', date: '2023-05-10', image: '/memories/first-date.jpg' },
  { id: '2', title: 'Trip Together', date: '2023-08-22', image: '/memories/trip.jpg' },
  { id: '3', title: 'Anniversary', date: '2024-06-15', image: '/memories/anniversary.jpg' },
];

export function Memories() {
  return (
    <PageContainer
      title="Memories"
      description="Capture and relive your love stories"
      actions={<Button icon={Plus}>Add Memory</Button>}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {memories.map((memory) => (
          <div key={memory.id} className="glass-card rounded-xl overflow-hidden">
            <div className="h-40 bg-gray-200 dark:bg-gray-700"></div>
            <div className="p-4">
              <h3 className="font-semibold">{memory.title}</h3>
              <p className="text-sm text-[var(--text-muted)]">{memory.date}</p>
            </div>
          </div>
        ))}
      </div>
    </PageContainer>
  );
}