'use client';

import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { mockInterviews } from '@/lib/mock-data';
import { Calendar, Clock, Video, Phone, MapPin, Plus } from 'lucide-react';

export default function InterviewsPage() {
  const [selectedType, setSelectedType] = useState<string | null>(null);

  const types = ['phone', 'video', 'in_person'] as const;
  const typeLabels = {
    phone: 'Phone',
    video: 'Video',
    in_person: 'In Person',
  } as const;

  const typeIcons = {
    phone: <Phone size={16} />,
    video: <Video size={16} />,
    in_person: <MapPin size={16} />,
  } as const;

  const roundLabels = {
    initial: 'Initial',
    technical: 'Technical',
    final: 'Final',
  } as const;

  const filteredInterviews = selectedType
    ? mockInterviews.filter((interview) => interview.type === selectedType)
    : mockInterviews;

  const typeCounts = types.map((type) => ({
    type,
    count: mockInterviews.filter((interview) => interview.type === type).length,
  }));

  // Sort by date
  const sortedInterviews = [...filteredInterviews].sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );

  return (
    <div className="space-y-6 max-w-6xl">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Interviews</h1>
          <p className="text-muted-foreground">Manage your interview schedule and preparations</p>
        </div>
        <Button variant="primary" size="lg">
          <Plus size={20} />
          Schedule Interview
        </Button>
      </div>

      {/* Filter Tabs */}
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedType(null)}
              className={`px-4 py-2 rounded-lg transition-colors ${
                selectedType === null
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted text-foreground hover:bg-card'
              }`}
            >
              All ({mockInterviews.length})
            </button>
            {typeCounts.map(({ type, count }) => (
              <button
                key={type}
                onClick={() => setSelectedType(type)}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  selectedType === type
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-foreground hover:bg-card'
                }`}
              >
                {typeLabels[type]} ({count})
              </button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Interviews List */}
      <div className="space-y-3">
        {sortedInterviews.length > 0 ? (
          sortedInterviews.map((interview) => (
            <Card key={interview.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-bold text-foreground">
                        {interview.jobTitle}
                      </h3>
                      <Badge variant="secondary">{roundLabels[interview.round]}</Badge>
                    </div>

                    <p className="text-sm text-muted-foreground mb-4">
                      {interview.company}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                      <div className="flex items-center gap-2">
                        <Calendar size={16} className="text-primary" />
                        <div>
                          <p className="text-xs text-muted-foreground">Date</p>
                          <p className="text-sm font-medium text-foreground">
                            {interview.date}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <Clock size={16} className="text-primary" />
                        <div>
                          <p className="text-xs text-muted-foreground">Time</p>
                          <p className="text-sm font-medium text-foreground">
                            {interview.time}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        {typeIcons[interview.type]}
                        <div>
                          <p className="text-xs text-muted-foreground">Type</p>
                          <p className="text-sm font-medium text-foreground">
                            {typeLabels[interview.type]}
                          </p>
                        </div>
                      </div>
                    </div>

                    {interview.notes && (
                      <div className="bg-muted p-3 rounded text-sm">
                        <p className="font-medium text-foreground mb-1">Notes:</p>
                        <p className="text-muted-foreground">{interview.notes}</p>
                      </div>
                    )}
                  </div>

                  <div className="flex gap-2 sm:flex-col">
                    <Button variant="secondary" size="sm">
                      Edit
                    </Button>
                    <Button variant="outline" size="sm">
                      Prepare
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))
        ) : (
          <Card>
            <CardContent className="p-12 text-center">
              <p className="text-muted-foreground mb-4">
                No interviews found for this filter
              </p>
              <Button variant="primary">Schedule Interview</Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
