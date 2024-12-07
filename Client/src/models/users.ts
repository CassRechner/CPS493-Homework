//import data from '../data/users.json'
import { rest } from './myFetch'
import type { DataEnvelope, DataListEnvelope } from './dataEnvelope'

export async function getAll() {
  return api<DataListEnvelope<User>>('products')
}

export async function getById(id: number) {
  return api<DataEnvelope<User>>(`products/${id}`)
}

export function create(user: User) {
  return api<DataEnvelope<User>>('users', user)
}

export function update(product: User) {
  return api<DataEnvelope<User>>(`products/${product.id}`, product, 'PATCH')
}

export function remove(id: number) {
  return api<DataEnvelope<User>>(`products/${id}`, undefined, 'DELETE')
}
/*
export function getAll(): DataListEnvelope<User> {
  return {
    data: data.items,
    total: data.total,
    isSuccess: true,
  }
}
*/

export interface User {
  id: number
  first: string
  last: string
  email: string
  handle: string
  region: number
  admin: boolean
}