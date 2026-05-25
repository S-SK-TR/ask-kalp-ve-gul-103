import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';

const variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

export function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-12rem)] px-4 text-center">
      <motion.div variants={variants} initial="initial" animate="animate">
        <h1 className="text-6xl font-bold text-[var(--text-primary)] mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-[var(--text-primary)] mb-2">Page Not Found</h2>
        <p className="text-[var(--text-muted)] mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Button asChild variant="primary">
          <Link to="/">Go to Dashboard</Link>
        </Button>
      </motion.div>
    </div>
  );
}