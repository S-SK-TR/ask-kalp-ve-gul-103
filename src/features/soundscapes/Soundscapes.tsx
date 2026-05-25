import { PageContainer } from '@/components/layout/PageContainer';
import { Button } from '@/components/ui/Button';
import { Music } from 'lucide-react';

const soundscapes = [
  { id: '1', name: 'Rain & Thunder', duration: '30 min', mood: 'Calm' },
  { id: '2', name: 'Ocean Waves', duration: '45 min', mood: 'Relaxed' },
  { id: '3', name: 'Forest Birds', duration: '25 min', mood: 'Peaceful' },
];

export function Soundscapes() {
  return (
    <PageContainer
      title="Soundscapes"
      description="Create your perfect love ambiance"
      actions={<Button icon={Music}>Create New</Button>}
    >
      <div className="space-y-4">
        {soundscapes.map((soundscape) => (
          <div key={soundscape.id} className="glass-card p-4 rounded-xl">
            <h3 className="font-semibold">{soundscape.name}</h3>
            <p className="text-sm text-[var(--text-muted)]">
              {soundscape.duration} • {soundscape.mood}
            </p>
          </div>
        ))}
      </div>
    </PageContainer>
  );
}