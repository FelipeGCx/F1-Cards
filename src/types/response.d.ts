export type Response = {
  status: string;
  message: string;
  data: DataResponse;
  code?: number;
  meta?: Object;
};

export type DataResponse = {
  pagination?: PaginationResponse;
  results?: any | Array<any | string>;
  warnings?: string[];
};

export type PaginationResponse = {
  page: number;
  totalPages: number;
  totalItems: number;
};
