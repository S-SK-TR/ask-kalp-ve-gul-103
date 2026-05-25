import { PageContainer } from '@/components/layout/PageContainer';
import { Button } from '@/components/ui/Button';
import { Plus } from 'lucide-react';

const events = [
  { id: '1', title: 'Anniversary', date: '2024-06-15', time: '19:00', location: 'Restaurant' },
  { id: '2', title: 'Dinner Date', date: '2024-06-20', time: '18:30', location: 'Home' },
  { id: '3', title: 'Movie Night', date: '2024-06-25', time: '20:00', location: 'Cinema' },
];

export function Planner() {
  return (
    <PageContainer
      title="Event Planner"
      description="Plan and organize your romantic dates"
      actions={<Button icon={Plus}>New Event</Button>}
    >
      <div className="space-y-4">
        {events.map((event) => (
          <div key={event.id} className="glass-card p-4 rounded-xl">
            <h3 className="font-semibold text-lg">{event.title}</h3>
            <p className="text-sm text-[var(--text-muted)]">
              {event.date} • {event.time} • {event.location}
            </p>
          </div>
        ))}
      </div>
    </PageContainer>
  );
}