import { api } from './myFetch'
import type { DataEnvelope, DataListEnvelope } from './dataEnvelope'

export async function getRegions() {
  return api<DataListEnvelope<Region>>('regions')
}

export async function getById(id: number) {
  return api<DataEnvelope<Region>>(`regions/${id}`)
}

export function create(region: Region) {
  return api<DataEnvelope<Region>>('regions', region)
}

export function update(region: Region) {
  return api<DataEnvelope<Region>>(`regions/${region.id}`, region, 'PATCH')
}

export function remove(id: number) {
  return api<DataEnvelope<Region>>(`regions/${id}`, undefined, 'DELETE')
}
/*
export function getRegions(): DataListEnvelope<Region> {
  return {
    data: data.items,
    total: data.total,
    isSuccess: true,
  }
}*/

export interface Region {
  id?: number
  name: string
}