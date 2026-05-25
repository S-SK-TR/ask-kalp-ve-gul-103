import { useEffect, useState } from 'react';
import { usePWAInstall } from '@/hooks/usePWAInstall';
import { Button } from './Button';
import { Download } from 'lucide-react';

interface InstallPromptProps {
  className?: string;
}

export function InstallPrompt({ className }: InstallPromptProps) {
  const { canInstall, install } = usePWAInstall();
  const [showPrompt, setShowPrompt] = useState(false);

  useEffect(() => {
    if (canInstall) {
      const timer = setTimeout(() => setShowPrompt(true), 3000);
      return () => clearTimeout(timer);
    }
  }, [canInstall]);

  if (!showPrompt || !canInstall) return null;

  return (
    <div className={cn(
      "fixed bottom-4 right-4 z-50",
      className
    )}>
      <div className="glass-card p-4 rounded-xl shadow-lg">
        <div className="flex items-center gap-3">
          <div className="bg-blue-500/10 p-2 rounded-lg">
            <Download size={20} className="text-blue-500" />
          </div>
          <div>
            <p className="font-medium">Install App</p>
            <p className="text-sm text-[var(--text-muted)]">Add to home screen for faster access</p>
          </div>
        </div>
        <div className="mt-3 flex gap-2">
          <Button size="sm" onClick={install}>Install</Button>
          <Button
            size="sm"
            variant="ghost"
            onClick={() => setShowPrompt(false)}
          >
            Later
          </Button>
        </div>
      </div>
    </div>
  );
}