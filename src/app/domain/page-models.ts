import { Image, TeamPreviewAttributes } from './team-preview-attributes';

export interface PageBlockElement<T> {
  imageUrl: Image;
  block: T;
}

export interface PageBlock<T> {
  type: string;
  id: string;
  attributes: T;
}

export interface Page {
  data: PageBlock<TeamPreviewAttributes>[];
}
