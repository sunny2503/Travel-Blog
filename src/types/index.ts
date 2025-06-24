export interface BlogPostType {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  author: {
    name: string;
    avatar: string;
  };
  category: string;
  tags: string[];
  date: string;
  readTime: string;
  likes: number;
  comments: number;
}

export interface DestinationType {
  id: string;
  name: string;
  country: string;
  image: string;
  description: string;
  highlights: string[];
  bestTime: string;
  rating: number;
  guides: number;
}

export interface PhotoType {
  id: string;
  url: string;
  caption: string;
  location: string;
  photographer: string;
}

export interface UserType {
  id: string;
  name: string;
  email: string;
  avatar: string;
  bio: string;
  bookmarks: string[];
  trips: any[];
}