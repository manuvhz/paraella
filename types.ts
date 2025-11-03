
import type React from 'react';

export interface AdmirationCardData {
  icon: React.ReactNode;
  title: string;
  text: string;
}

export interface GalleryImage {
  id: string;
  title: string;
  link: string;
  caption: string;
}

export interface TimelineEvent {
  date: string;
  title: string;
  description: string;
  emotion: string;
}

export interface OurSong {
  title: string;
  artist: string;
  url: string;
}

export interface PromiseData {
  icon: React.ReactNode;
  title: string;
  text: string;
}

export interface Treasure {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  type: 'image' | 'animation' | 'emoji';
  data: string;
}