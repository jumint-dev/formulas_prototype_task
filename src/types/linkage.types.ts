// 多级联动筹划相关类型定义

export type ResourceLevel = 1 | 2 | 3 | 4 | 5
export type ConnectionStatus = 'connected' | 'disconnected' | 'error'
export type AlertLevel = 'normal' | 'low' | 'critical'
export type SystemType = 'C2' | 'C4ISR' | 'Logistics' | 'Intelligence'

export interface ForceResourceSummary {
  totalUnits: number
  availableUnits: number
  utilizationRate: number
  byLevel: Record<ResourceLevel, number>
  byType: Record<string, number>
}

export interface AircraftQuantity {
  total: number
  available: number
  inMission: number
  maintenance: number
}

export interface AircraftItem {
  id: string
  type: string
  quantity: AircraftQuantity
  base: string
  level: ResourceLevel
  capabilities: string[]
}

export interface PersonnelResource {
  id: string
  role: string
  quantity: AircraftQuantity
  level: ResourceLevel
}

export interface EquipmentResource {
  id: string
  type: string
  name: string
  quantity: AircraftQuantity
  level: ResourceLevel
}

export interface AmmoItem {
  id: string
  type: string
  name: string
  quantity: number
  unit: string
  alertLevel: AlertLevel
  level: ResourceLevel
}

export interface ForceResourcePool {
  totalUnits: number
  availableUnits: number
  aircraft: AircraftItem[]
  personnel: PersonnelResource[]
  equipment: EquipmentResource[]
  lastUpdateTime: Date
}

export interface AmmoResource {
  id: string
  type: string
  name: string
  quantity: number
  unit: string
  alertLevel: AlertLevel
  level: ResourceLevel
}

export interface AmmoResourcePool {
  totalTypes: number
  items: AmmoResource[]
  lastUpdateTime: Date
}

export interface ForceStatus {
  total: number
  available: number
}

export interface AmmoStatus {
  types: number
  totalItems: number
}

export interface LevelResourceInfo {
  level: ResourceLevel
  name: string
  isConnected: boolean
  forceResource: ForceStatus
  ammoResource: AmmoStatus
  lastReportTime: string
}

export interface ConnectedSystemInfo {
  id: string
  name: string
  type: SystemType
  level: ResourceLevel
  connectionStatus: ConnectionStatus
  lastAccessTime: string
  accessCount: number
}
