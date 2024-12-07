import { ref } from 'vue'
import data from '../data/exercises.json'
import type { DataListEnvelope } from './dataEnvelope'

export function getExercises(): DataListEnvelope<Exercise> {
  return {
    data: data.items,
    total: data.total,
    isSuccess: true,
  }
}

export interface Exercise {
  id: number
  user: number
  title: string
  date: string
  distance: number
  duration: number
  region: number
}