import data from '../data/regions.json'
import type { DataListEnvelope } from './dataEnvelope'

export function getRegions(): DataListEnvelope<Region> {
  return {
    data: data.items,
    total: data.total,
    isSuccess: true,
  }
}

export interface Region {
  id: number
  name: string
}