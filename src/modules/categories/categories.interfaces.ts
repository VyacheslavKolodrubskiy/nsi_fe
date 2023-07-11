export interface Category {
  description: string
  id: string
  is_group: boolean
  manager_id: number | null
  modified_at: string
  name: string
  parent_id?: string
  product_group_id?: string
}
