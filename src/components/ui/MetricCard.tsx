import { TrendingUp, TrendingDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface MetricCardProps {
  title: string;
  value: string;
  delta?: number;
  icon: React.ElementType;
  variant?: 'default' | 'success' | 'danger';
}

export function MetricCard({ title, value, delta, icon: Icon, variant = 'default' }: MetricCardProps) {
  const isPositive = delta && delta > 0;
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className="glass-card rounded-2xl p-5 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 group"
    >
      <div className="flex items-start justify-between mb-4">
        <div className={cn(
          "p-2.5 rounded-xl",
          variant === 'success' && "bg-emerald-500/10 text-emerald-500",
          variant === 'danger' && "bg-rose-500/10 text-rose-500",
          variant === 'default' && "bg-blue-500/10 text-blue-500"
        )}>
          <Icon size={20} data-testid={`${Icon.name.toLowerCase()}-icon`} />
        </div>
        {delta !== undefined && (
          <span className={cn(
            "flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-full",
            isPositive ? "bg-emerald-500/10 text-emerald-500" : "bg-rose-500/10 text-rose-500"
          )}>
            {isPositive ? <TrendingUp size={12} data-testid="trending-up-icon" /> : <TrendingDown size={12} data-testid="trending-down-icon" />}
            {Math.abs(delta)}%
          </span>
        )}
      </div>
      <p className="text-2xl font-bold text-[var(--text-primary)] mb-0.5">{value}</p>
      <p className="text-sm text-[var(--text-muted)]">{title}</p>
    </motion.div>
  );
}