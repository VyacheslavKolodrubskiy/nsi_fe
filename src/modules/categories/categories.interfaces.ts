export interface CategoryResponse {
  results: Category[]
}

export interface Category {
  description: string
  is_group: boolean
  manager_id: number | null
  modified_at: string
  created_at: string
  name: string
  id?: string
  parent_id?: string
  product_group_id?: string
  property_model_id?: string
}
