export enum SortPropertyEnum {
  PRICE_ASC = '-price',
  PRICE_DESC = 'price',
  RATING_DESC = 'rating',
  TITLE_ASC = '-title',
  TITLE_DESC = 'title',
}

export type SortType = {
  name: string
  sortProperty: SortPropertyEnum
}

export interface FilterSliceState {
  categoryId: number
  currentPage: number
  searchValue: string
  sort: SortType
}
