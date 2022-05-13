export interface MovieImage {
  id: number;
  backdrops: Array<typeof Image>;
  posters: Array<typeof Image>;
}

interface Dates {
  maximum: string;
  minimum: string;
}

export interface ListResponse<T> {
  dates: Dates;
  page: number;
  results: T[];
  total_pages: number;
  total_results: number;
}
