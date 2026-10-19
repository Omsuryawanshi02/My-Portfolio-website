export interface CommunityItem {
  id: string;
  badge: string;
  title: string;
  description: string;
  linkText: string;
  url: string;
  platform: 'linkedin' | 'github' | 'article' | 'hackathon';
}
