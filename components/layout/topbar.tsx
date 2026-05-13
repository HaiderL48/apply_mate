'use client';

import React, { useEffect, useState } from 'react';
import { useTheme } from '@/lib/theme-context';
import { Moon, Sun } from 'lucide-react';

interface TopBarProps {
  title?: string;
  children?: React.ReactNode;
}

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg hover:bg-muted transition-colors ml-4"
      aria-label="Toggle theme"
      title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'light' ? (
        <Moon size={20} className="text-foreground" />
      ) : (
        <Sun size={20} className="text-foreground" />
      )}
    </button>
  );
}

export function TopBar({ title, children }: TopBarProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="sticky top-0 z-40 w-full bg-card border-b border-border">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex-1">
          {title && <h1 className="text-2xl font-bold text-foreground">{title}</h1>}
          {children}
        </div>

        {/* Theme Toggle - Only render after mount to avoid hydration mismatch */}
        {mounted && <ThemeToggle />}
      </div>
    </header>
  );
}
