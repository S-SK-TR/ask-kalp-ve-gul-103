import { NavLink, Outlet } from 'react-router-dom';
import { LayoutDashboard, Calendar, Heart, Sun, Music, Bell } from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { to: '/', icon: LayoutDashboard, label: 'Dashboard' },
  { to: '/planner', icon: Calendar, label: 'Planner' },
  { to: '/memories', icon: Heart, label: 'Memories' },
  { to: '/sun-safe', icon: Sun, label: 'SunSafe' },
  { to: '/soundscapes', icon: Music, label: 'Soundscapes' },
];

export function AppShell() {
  return (
    <div className="flex h-dvh bg-[var(--bg-base)] text-[var(--text-primary)] overflow-hidden">
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex flex-col w-60 border-r border-[var(--border)] bg-[var(--bg-surface)] shrink-0">
        <div className="h-16 flex items-center px-5 border-b border-[var(--border)]">
          <span className="font-bold text-lg tracking-tight">Aşk: Kalp ve Gül</span>
        </div>
        <nav className="flex-1 p-3 space-y-0.5">
          {navItems.map(({ to, icon: Icon, label }) => (
            <NavLink key={to} to={to} end className={({ isActive }) => cn(
              "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
              isActive ? "bg-blue-500/10 text-blue-500" : "text-[var(--text-muted)] hover:bg-[var(--bg-elevated)] hover:text-[var(--text-primary)]"
            )}>
              <Icon size={18} />
              {label}
            </NavLink>
          ))}
        </nav>
        <div className="p-3 border-t border-[var(--border)]">
          <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[var(--bg-elevated)] transition-colors">
            <img src="/avatar.png" className="w-8 h-8 rounded-full object-cover" alt="avatar" />
            <div className="flex-1 text-left">
              <p className="text-xs font-semibold">John Doe</p>
              <p className="text-xs text-[var(--text-muted)]">john@example.com</p>
            </div>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        <header className="h-16 shrink-0 flex items-center justify-between px-4 md:px-6 border-b border-[var(--border)] bg-[var(--bg-surface)]/80 backdrop-blur-xl sticky top-0 z-30">
          <h1 className="font-semibold text-[var(--text-primary)]">Dashboard</h1>
          <button className="relative p-2 rounded-lg hover:bg-[var(--bg-elevated)] transition-colors">
            <Bell size={20} />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-blue-500 rounded-full" />
          </button>
        </header>
        <main className="flex-1 overflow-y-auto pb-20 md:pb-0">
          <Outlet />
        </main>
      </div>

      {/* Mobile Bottom Navigation */}
      <nav className="md:hidden fixed bottom-0 inset-x-0 z-50 bg-[var(--bg-surface)]/90 backdrop-blur-xl border-t border-[var(--border)] pb-[env(safe-area-inset-bottom)]">
        <div className="flex h-16">
          {navItems.map(({ to, icon: Icon, label }) => (
            <NavLink key={to} to={to} end className={({ isActive }) => cn(
              "flex-1 flex flex-col items-center justify-center gap-1 text-[10px] font-medium transition-colors",
              isActive ? "text-blue-500" : "text-[var(--text-muted)]"
            )}>
              <Icon size={22} />
              {label}
            </NavLink>
          ))}
        </div>
      </nav>
    </div>
  );
}