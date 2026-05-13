export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  salary?: string;
  status: 'applied' | 'shortlisted' | 'rejected' | 'interview';
  postedDate: string;
  description: string;
  requirements: string[];
}

export interface OutreachContact {
  id: string;
  name: string;
  role: string;
  company: string;
  email: string;
  status: 'not_contacted' | 'contacted' | 'interested' | 'no_response';
  lastContactDate?: string;
  notes: string;
}

export interface Interview {
  id: string;
  jobTitle: string;
  company: string;
  date: string;
  time: string;
  type: 'phone' | 'video' | 'in_person';
  round: 'initial' | 'technical' | 'final';
  notes: string;
}

export const mockJobs: Job[] = [
  {
    id: '1',
    title: 'Senior Frontend Engineer',
    company: 'TechCorp',
    location: 'San Francisco, CA',
    salary: '$150k - $180k',
    status: 'shortlisted',
    postedDate: '2 days ago',
    description: 'Looking for an experienced frontend engineer with React expertise',
    requirements: ['React', 'TypeScript', '5+ years experience'],
  },
  {
    id: '2',
    title: 'Full Stack Developer',
    company: 'StartupXYZ',
    location: 'New York, NY',
    salary: '$120k - $150k',
    status: 'applied',
    postedDate: '5 days ago',
    description: 'Join our fast-growing startup to build next-gen products',
    requirements: ['Node.js', 'React', 'MongoDB'],
  },
  {
    id: '3',
    title: 'Backend Engineer',
    company: 'CloudSystems',
    location: 'Remote',
    salary: '$130k - $160k',
    status: 'interview',
    postedDate: '1 week ago',
    description: 'Build scalable backend infrastructure',
    requirements: ['Python', 'AWS', 'Docker'],
  },
  {
    id: '4',
    title: 'DevOps Engineer',
    company: 'InfraCorp',
    location: 'Boston, MA',
    salary: '$140k - $170k',
    status: 'applied',
    postedDate: '3 days ago',
    description: 'Manage and optimize cloud infrastructure',
    requirements: ['Kubernetes', 'Terraform', 'AWS'],
  },
  {
    id: '5',
    title: 'Senior Software Engineer',
    company: 'MegaTech',
    location: 'Seattle, WA',
    salary: '$160k - $190k',
    status: 'rejected',
    postedDate: '1 week ago',
    description: 'Lead technical initiatives at scale',
    requirements: ['Java', 'System Design', '7+ years experience'],
  },
  {
    id: '6',
    title: 'React Native Developer',
    company: 'MobileInc',
    location: 'Austin, TX',
    salary: '$110k - $140k',
    status: 'shortlisted',
    postedDate: '4 days ago',
    description: 'Build mobile apps for millions of users',
    requirements: ['React Native', 'TypeScript', 'Mobile UX'],
  },
];

export const mockOutreach: OutreachContact[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    role: 'Engineering Manager',
    company: 'TechCorp',
    email: 'sarah.johnson@techcorp.com',
    status: 'interested',
    lastContactDate: '2024-05-10',
    notes: 'Interested in discussing open positions',
  },
  {
    id: '2',
    name: 'Michael Chen',
    role: 'CTO',
    company: 'StartupXYZ',
    email: 'michael@startupxyz.com',
    status: 'contacted',
    lastContactDate: '2024-05-08',
    notes: 'Waiting for response on hiring timeline',
  },
  {
    id: '3',
    name: 'Emma Rodriguez',
    role: 'Talent Recruiter',
    company: 'CloudSystems',
    email: 'emma.r@cloudsystems.com',
    status: 'interested',
    lastContactDate: '2024-05-12',
    notes: 'Promising conversation about role fit',
  },
  {
    id: '4',
    name: 'David Park',
    role: 'VP Engineering',
    company: 'InfraCorp',
    email: 'david.park@infracorp.com',
    status: 'no_response',
    lastContactDate: '2024-05-05',
    notes: 'Follow up after 1 week',
  },
  {
    id: '5',
    name: 'Lisa Anderson',
    role: 'Technical Lead',
    company: 'MegaTech',
    email: 'lisa.anderson@megatech.com',
    status: 'contacted',
    lastContactDate: '2024-05-09',
    notes: 'Discussing team structure and projects',
  },
];

export const mockInterviews: Interview[] = [
  {
    id: '1',
    jobTitle: 'Senior Frontend Engineer',
    company: 'TechCorp',
    date: '2024-05-20',
    time: '10:00 AM',
    type: 'video',
    round: 'initial',
    notes: 'Technical screening with hiring manager',
  },
  {
    id: '2',
    jobTitle: 'Backend Engineer',
    company: 'CloudSystems',
    date: '2024-05-22',
    time: '2:00 PM',
    type: 'video',
    round: 'technical',
    notes: 'System design and coding challenge',
  },
  {
    id: '3',
    jobTitle: 'React Native Developer',
    company: 'MobileInc',
    date: '2024-05-25',
    time: '11:00 AM',
    type: 'phone',
    round: 'initial',
    notes: 'Introduction call with recruiter',
  },
  {
    id: '4',
    jobTitle: 'Full Stack Developer',
    company: 'StartupXYZ',
    date: '2024-05-28',
    time: '3:30 PM',
    type: 'in_person',
    round: 'final',
    notes: 'Final round with founders',
  },
];

export const dashboardStats = {
  totalApplications: 24,
  responseRate: 67,
  upcomingInterviews: 4,
  avgResponseTime: '2.5 days',
};
