'use client';

import React from 'react';
import { Sidebar } from '@/components/layout/sidebar';
import { TopBar } from '@/components/layout/topbar';
import {
  LayoutDashboard,
  Briefcase,
  Users,
  Calendar,
  FileText,
} from 'lucide-react';

const navItems = [
  {
    label: 'Dashboard',
    href: '/dashboard',
    icon: <LayoutDashboard size={20} />,
  },
  {
    label: 'Jobs',
    href: '/dashboard/jobs',
    icon: <Briefcase size={20} />,
  },
  {
    label: 'Outreach',
    href: '/dashboard/outreach',
    icon: <Users size={20} />,
  },
  {
    label: 'Interviews',
    href: '/dashboard/interviews',
    icon: <Calendar size={20} />,
  },
  {
    label: 'Resume',
    href: '/dashboard/resume',
    icon: <FileText size={20} />,
  },
];

export default function DashboardLayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen bg-background text-foreground">
      <Sidebar items={navItems} />
      <div className="flex-1 flex flex-col md:ml-64 overflow-hidden">
        <TopBar />
        <main className="flex-1 overflow-auto">
          <div className="p-6">{children}</div>
        </main>
      </div>
    </div>
  );
}
