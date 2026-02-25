// 多副本数据服务相关类型定义

export type ReplicaStatus = 'active' | 'archived' | 'syncing'
export type SyncStatusType = 'synced' | 'syncing' | 'error'

export interface ReplicaListItem {
  id: string
  name: string
  replicaIndex: number
  version: string
  status: ReplicaStatus
  syncStatus: SyncStatusType
  createTime: string
  creator: string
  dataSize: number
}

export interface ReplicaDetail extends ReplicaListItem {
  description: string
  updateTime: string
  metadata: ReplicaMetadata
}

export interface ReplicaMetadata {
  taskType: string
  priority: number
  tags: string[]
  attachments: string[]
}

export interface VersionItem {
  id: string
  version: string
  createTime: string
  creator: string
  changeLog: string
  dataSize: number
  isCurrent: boolean
}

export interface ReplicaSyncStatus {
  isSyncing: boolean
  progress: number
  replicaHealth: Record<number, boolean>
  lastSyncTime: string | null
  errorCount: number
}

export interface ReplicaFilters {
  status: ReplicaStatus[]
  dateRange: [Date, Date] | null
  creators: string[]
  replicaIndex: number[]
  searchQuery: string
}

export interface CreateReplicaRequest {
  name: string
  description: string
  metadata: Partial<ReplicaMetadata>
}

export interface ReplicaScheme {
  id: string
  name: string
  description: string
  createTime: Date
  updateTime: Date
  creator: string
  status: ReplicaStatus
  replicaIndex: number
  version: string
  dataSize: number
  syncStatus: SyncStatusType
  metadata: ReplicaMetadata
}
