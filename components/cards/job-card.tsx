import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building, MapPin, DollarSign, Calendar } from 'lucide-react';

interface JobCardProps {
  id: string;
  title: string;
  company: string;
  location: string;
  salary?: string;
  status: 'applied' | 'shortlisted' | 'rejected' | 'interview';
  postedDate: string;
  onClick?: () => void;
}

const statusVariants = {
  applied: 'info',
  shortlisted: 'success',
  rejected: 'error',
  interview: 'warning',
} as const;

const statusLabels = {
  applied: 'Applied',
  shortlisted: 'Shortlisted',
  rejected: 'Rejected',
  interview: 'Interview',
} as const;

export function JobCard({
  id,
  title,
  company,
  location,
  salary,
  status,
  postedDate,
  onClick,
}: JobCardProps) {
  return (
    <Card
      className="cursor-pointer hover:shadow-md transition-shadow"
      onClick={onClick}
    >
      <CardContent className="p-0">
        <div className="flex items-start justify-between p-6">
          <div className="flex-1">
            <h3 className="text-lg font-bold text-foreground mb-1">{title}</h3>
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
              <Building size={16} />
              {company}
            </div>

            <div className="flex flex-wrap gap-4 mb-4">
              <div className="flex items-center gap-1 text-sm">
                <MapPin size={16} className="text-muted" />
                {location}
              </div>
              {salary && (
                <div className="flex items-center gap-1 text-sm">
                  <DollarSign size={16} className="text-muted" />
                  {salary}
                </div>
              )}
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <Calendar size={16} />
                {postedDate}
              </div>
            </div>

            <Badge variant={statusVariants[status]}>
              {statusLabels[status]}
            </Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
