'use client';

import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { mockOutreach } from '@/lib/mock-data';
import { Mail, Plus, ExternalLink } from 'lucide-react';

export default function OutreachPage() {
  const [selectedStatus, setSelectedStatus] = useState<string | null>(null);

  const statuses = ['not_contacted', 'contacted', 'interested', 'no_response'] as const;
  const statusLabels = {
    not_contacted: 'Not Contacted',
    contacted: 'Contacted',
    interested: 'Interested',
    no_response: 'No Response',
  } as const;

  const statusVariants = {
    not_contacted: 'default',
    contacted: 'info',
    interested: 'success',
    no_response: 'warning',
  } as const;

  const filteredContacts = selectedStatus
    ? mockOutreach.filter((contact) => contact.status === selectedStatus)
    : mockOutreach;

  const statusCounts = statuses.map((status) => ({
    status,
    count: mockOutreach.filter((contact) => contact.status === status).length,
  }));

  return (
    <div className="space-y-6 max-w-6xl">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Outreach Contacts</h1>
          <p className="text-muted-foreground">Track your networking and recruitment outreach</p>
        </div>
        <Button variant="primary" size="lg">
          <Plus size={20} />
          Add Contact
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
              All ({mockOutreach.length})
            </button>
            {statusCounts.map(({ status, count }) => (
              <button
                key={status}
                onClick={() => setSelectedStatus(status)}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  selectedStatus === status
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-foreground hover:bg-card'
                }`}
              >
                {statusLabels[status]} ({count})
              </button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Contacts List */}
      <div className="space-y-3">
        {filteredContacts.length > 0 ? (
          filteredContacts.map((contact) => (
            <Card key={contact.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-bold text-foreground">{contact.name}</h3>
                      <Badge variant={statusVariants[contact.status] as any}>
                        {statusLabels[contact.status]}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">
                      {contact.role} at {contact.company}
                    </p>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-sm">
                        <Mail size={16} className="text-muted" />
                        <a
                          href={`mailto:${contact.email}`}
                          className="text-primary hover:underline"
                        >
                          {contact.email}
                        </a>
                      </div>
                      {contact.lastContactDate && (
                        <p className="text-xs text-muted-foreground">
                          Last contacted: {contact.lastContactDate}
                        </p>
                      )}
                    </div>

                    {contact.notes && (
                      <div className="bg-muted p-3 rounded text-sm">
                        <p className="font-medium text-foreground mb-1">Notes:</p>
                        <p className="text-muted-foreground">{contact.notes}</p>
                      </div>
                    )}
                  </div>

                  <div className="flex gap-2 sm:flex-col">
                    <Button variant="secondary" size="sm">
                      <Mail size={16} />
                      Email
                    </Button>
                    <Button variant="outline" size="sm">
                      <ExternalLink size={16} />
                      LinkedIn
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
                No contacts found for this filter
              </p>
              <Button variant="primary">Add Contact</Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
