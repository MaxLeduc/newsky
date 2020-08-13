export interface Media {
  url: string;
  format: string;
  height: number;
  width: number;
}

export interface Article {
  abstract: string;
  byline: string;
  published_date: string;
  section: string;
  short_url: string;
  subsection: string;
  title: string;
  created_date: string;
  multimedia: Media[];
  url: string;
  uri: string;
}

export interface NewsPayload {
  copyright: string;
  last_updated: string;
  num_results: number;
  results: Article[];
  section: string;
  status: string;
}
