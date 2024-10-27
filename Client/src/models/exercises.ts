import data from '../data/exercises.json'
import type { DataListEnvelope } from './dataEnvelope'

export function getAll(): DataListEnvelope<Exercise> {
  return {
    data: data.items,
    total: data.total
  }
}

export interface Exercise {
  id: number
  user: string
  title: string
  date: string
  distance: number
  duration: number
}