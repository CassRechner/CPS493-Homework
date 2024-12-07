//import data from '../data/users.json'
import { api } from './myFetch'
import type { DataEnvelope, DataListEnvelope } from './dataEnvelope'

export async function getAll() {
  return api<DataListEnvelope<User>>('users')
}

export async function getById(id: number) {
  return api<DataEnvelope<User>>(`users/${id}`)
}

export function create(user: User) {
  return api<DataEnvelope<User>>('users', user)
}

export function update(user: User) {
  return api<DataEnvelope<User>>(`users/${user.id}`, user, 'PATCH')
}

export function remove(id: number) {
  return api<DataEnvelope<User>>(`users/${id}`, undefined, 'DELETE')
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