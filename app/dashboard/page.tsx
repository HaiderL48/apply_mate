'use client';

import React from 'react';
import { StatCard } from '@/components/cards/stat-card';
import { JobCard } from '@/components/cards/job-card';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { mockJobs, mockInterviews, dashboardStats } from '@/lib/mock-data';
import { TrendingUp, Users, Calendar, CheckCircle } from 'lucide-react';

export default function DashboardPage() {
  const recentJobs = mockJobs.slice(0, 3);
  const upcomingInterviews = mockInterviews.slice(0, 3);

  return (
    <div className="space-y-6 max-w-7xl">
      {/* Header */}
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold text-foreground">Welcome back!</h1>
        <p className="text-muted-foreground">Here&apos;s your job application overview</p>
      </div>

      {/* Statistics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          label="Total Applications"
          value={dashboardStats.totalApplications}
          icon={<CheckCircle />}
          trend={{ value: 12, isPositive: true }}
        />
        <StatCard
          label="Response Rate"
          value={`${dashboardStats.responseRate}%`}
          icon={<TrendingUp />}
          trend={{ value: 8, isPositive: true }}
        />
        <StatCard
          label="Upcoming Interviews"
          value={dashboardStats.upcomingInterviews}
          icon={<Calendar />}
        />
        <StatCard
          label="Avg Response Time"
          value={dashboardStats.avgResponseTime}
          icon={<Users />}
        />
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Applications */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Recent Applications</CardTitle>
              <CardDescription>
                Your latest 3 job applications
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentJobs.map((job) => (
                  <JobCard
                    key={job.id}
                    id={job.id}
                    title={job.title}
                    company={job.company}
                    location={job.location}
                    salary={job.salary}
                    status={job.status}
                    postedDate={job.postedDate}
                  />
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Upcoming Interviews */}
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Interviews</CardTitle>
              <CardDescription>Next scheduled interviews</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingInterviews.map((interview) => (
                  <div
                    key={interview.id}
                    className="p-4 rounded-lg bg-muted hover:shadow-md transition-shadow"
                  >
                    <h4 className="font-semibold text-foreground mb-1">
                      {interview.jobTitle}
                    </h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      {interview.company}
                    </p>
                    <div className="space-y-1 text-xs">
                      <p className="text-foreground">
                        <span className="font-medium">Date:</span> {interview.date}
                      </p>
                      <p className="text-foreground">
                        <span className="font-medium">Time:</span> {interview.time}
                      </p>
                      <p className="text-foreground">
                        <span className="font-medium">Type:</span> {interview.type}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
