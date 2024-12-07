import { api } from './myFetch'
import type { DataEnvelope, DataListEnvelope } from './dataEnvelope'

export async function getExercises() {
  return api<DataListEnvelope<Exercise>>('exercises')
}

export async function getById(id: number) {
  return api<DataEnvelope<Exercise>>(`exercises/${id}`)
}

export function create(exercise: Exercise) {
  return api<DataEnvelope<Exercise>>('exercises', exercise)
}

export function update(exercise: Exercise) {
  return api<DataEnvelope<Exercise>>(`exercises/${exercise.id}`, exercise, 'PATCH')
}

export function remove(id: number) {
  return api<DataEnvelope<Exercise>>(`exercises/${id}`, undefined, 'DELETE')
}
/*
export function getExercises(): DataListEnvelope<Exercise> {
  return {
    data: data.items,
    total: data.total,
    isSuccess: true,
  }
}*/

export interface Exercise {
  id: number
  user: number
  title: string
  date: string
  distance: number
  duration: number
  region: number
}