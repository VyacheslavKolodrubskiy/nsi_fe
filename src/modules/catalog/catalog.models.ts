export interface CatalogResponse {
  page: number
  page_size: number
  total_count: number
  results: Catalog[]
}

export interface Catalog {
  id: string
  code: string
  type: number
  name: string
  group_id: string
  created_at: string
  modified_at: string
  status: string
  published: boolean
  category_id: string
  manager_id: number
  description: string
}
