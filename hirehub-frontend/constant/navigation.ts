import { LayoutDashboard, Briefcase, Users, Heart, Search, FileUser, PlusCircle } from 'lucide-react';

export const EMPLOYER_NAV_ITEMS = [
  { id: 'overview', label: 'Overview', icon: LayoutDashboard, href: '/dashboard/employer' },
  { id: 'my-jobs', label: 'Posted Jobs', icon: Briefcase, href: '/dashboard/employer/jobs' },
  { id: 'applicants', label: 'Applicants', icon: Users, href: '/dashboard/employer/applicants' },
{ id: 'post-job', label: 'Post a Job', icon: PlusCircle, href: '/dashboard/employer/post-job' },
];

export const CANDIDATE_NAV_ITEMS = [
  { id: 'overview', label: 'My Applications', icon: FileUser, href: '/dashboard/candidate' },
  { id: 'search', label: 'Find Jobs', icon: Search, href: '/jobs' },
  { id: 'favorites', label: 'Favorites', icon: Heart, href: '/dashboard/candidate/favorites' },
];