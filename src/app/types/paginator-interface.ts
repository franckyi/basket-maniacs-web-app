export interface PaginatorInterface {
    length: number;
    pageSize: number;
    pageIndex: number;
    pageSizeOptions: [number, number, number];
  }