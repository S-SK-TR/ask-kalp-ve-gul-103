import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppShell } from './components/layout/AppShell';
import { Dashboard } from './features/dashboard/Dashboard';
import { Planner } from './features/planner/Planner';
import { Memories } from './features/memories/Memories';
import { SunSafe } from './features/sun-safe/SunSafe';
import { Soundscapes } from './features/soundscapes/Soundscapes';
import { NotFound } from './features/not-found/NotFound';

// ErrorBoundary bileşenini import edin
import { ErrorBoundary } from './components/ui/ErrorBoundary';

// PageTransition bileşenini import edin
import { PageTransition } from './components/ui/PageTransition';

// InstallPrompt bileşenini import edin
import { InstallPrompt } from './components/ui/InstallPrompt';

// ThemeToggle bileşenini import edin
import { ThemeToggle } from './components/ui/ThemeToggle';

// OfflineBanner bileşenini import edin
import { OfflineBanner } from './components/ui/OfflineBanner';

export default function App() {
  return (
    <ErrorBoundary>
      <Router>
        <AppShell>
          <PageTransition>
            <Routes>
              <Route index element={<Dashboard />} />
              <Route path="planner" element={<Planner />} />
              <Route path="memories" element={<Memories />} />
              <Route path="sun-safe" element={<SunSafe />} />
              <Route path="soundscapes" element={<Soundscapes />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </PageTransition>
        </AppShell>
        <InstallPrompt />
        <ThemeToggle />
        <OfflineBanner />
      </Router>
    </ErrorBoundary>
  );
}