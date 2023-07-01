export interface PaginatorInterface {
    length: number;
    pageSize: number;
    pageIndex: number | null;
    pageSizeOptions: [number, number, number, number];
  }