'use client';

import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { JobCard } from '@/components/cards/job-card';
import { Button } from '@/components/ui/button';
import { mockJobs } from '@/lib/mock-data';
import { Filter, Plus } from 'lucide-react';

export default function JobsPage() {
  const [selectedStatus, setSelectedStatus] = useState<string | null>(null);

  const filteredJobs = selectedStatus
    ? mockJobs.filter((job) => job.status === selectedStatus)
    : mockJobs;

  const statuses = ['applied', 'shortlisted', 'interview', 'rejected'] as const;
  const statusCounts = statuses.map((status) => ({
    status,
    count: mockJobs.filter((job) => job.status === status).length,
  }));

  return (
    <div className="space-y-6 max-w-6xl">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Job Applications</h1>
          <p className="text-muted-foreground">Manage all your job applications in one place</p>
        </div>
        <Button variant="primary" size="lg">
          <Plus size={20} />
          Add Application
        </Button>
      </div>

      {/* Filter Tabs */}
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedStatus(null)}
              className={`px-4 py-2 rounded-lg transition-colors ${
                selectedStatus === null
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted text-foreground hover:bg-card'
              }`}
            >
              All ({mockJobs.length})
            </button>
            {statusCounts.map(({ status, count }) => (
              <button
                key={status}
                onClick={() => setSelectedStatus(status)}
                className={`px-4 py-2 rounded-lg transition-colors capitalize ${
                  selectedStatus === status
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-foreground hover:bg-card'
                }`}
              >
                {status} ({count})
              </button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Jobs List */}
      <div className="space-y-3">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job) => (
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
          ))
        ) : (
          <Card>
            <CardContent className="p-12 text-center">
              <p className="text-muted-foreground mb-4">
                No applications found for this filter
              </p>
              <Button variant="primary">Add Application</Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
