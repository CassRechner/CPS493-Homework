import data from '../data/users.json'
import type { DataListEnvelope } from './dataEnvelope'

export function getAll(): DataListEnvelope<User> {
  return {
    data: data.items,
    total: data.total
  }
}

export interface User {
  id: number
  first: string
  last: string
  email: string
  handle: string
  admin: boolean
}