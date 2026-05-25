import { motion } from 'framer-motion';
import { PageContainer } from '@/components/layout/PageContainer';
import { MetricCard } from '@/components/ui/MetricCard';
import { Heart, Sun, Music, Calendar } from 'lucide-react';

const metrics = [
  { title: 'Memories', value: '128', delta: 5, icon: Heart, variant: 'default' },
  { title: 'SunSafe', value: '82%', delta: -3, icon: Sun, variant: 'success' },
  { title: 'Soundscapes', value: '4', delta: 1, icon: Music, variant: 'default' },
  { title: 'Planner', value: '3', delta: 0, icon: Calendar, variant: 'danger' },
];

export function Dashboard() {
  return (
    <PageContainer title="Dashboard" description="Your love journey overview">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((metric) => (
          <motion.div
            key={metric.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <MetricCard {...metric} />
          </motion.div>
        ))}
      </div>
    </PageContainer>
  );
}