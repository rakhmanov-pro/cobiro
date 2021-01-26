import { PageBlockElement } from './page-models';

export interface TeamPreviewAttributes {
  title: string;
  memberCards: Record<string, PageBlockElement<MemberCardBlock>>;
}

export interface Image {
  w200: string;
  w400: string;
  w1080: string;
  w1920: string;
  w2560: string;
}

export interface MemberCardBlock {
  description: string;
  link: string;
  text: string;
  title: string;
}
