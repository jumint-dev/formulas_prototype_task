// 数据打包推送与加载服务相关类型定义

export type PackageStatus = 'pending' | 'packaged' | 'archived'
export type LoadMode = 'append' | 'overwrite'
export type LoadStatus = 'pending' | 'loading' | 'completed' | 'failed' | 'paused'

export interface PackageIncludes {
  replicas: boolean
  resources: boolean
  bridgeData: boolean
  configs: boolean
}

export interface DataPackageInfo {
  id: string
  batchNumber: string
  name: string
  description: string
  creator: string
  createTime: string
  taskType: string
  tags: string[]
  dataSize: number
  recordCount: number
  includes: PackageIncludes
  status: PackageStatus
}

export interface CreatePackageRequest {
  name: string
  description: string
  taskType: string
  tags: string[]
  includes: PackageIncludes
}

export interface LoadStatsInfo {
  totalRecords: number
  successRecords: number
  failedRecords: number
  skippedRecords: number
  tablesUpdated: string[]
  successRate: number
}

export interface LoadingJobInfo {
  id: string
  packageId: string
  packageName: string
  status: LoadStatus
  progress: number
  currentStep: string
  startTime: string
  endTime: string | null
  duration: number
  mode: LoadMode
  stats: LoadStatsInfo
}

export interface LoadLogEntry {
  timestamp: string
  level: 'info' | 'warn' | 'error'
  step: string
  message: string
}

export interface ExceptionDataInfo {
  id: string
  loadJobId: string
  tableName: string
  recordData: Record<string, unknown>
  exceptionType: string
  exceptionMessage: string
  timestamp: string
  isResolved: boolean
}

export interface LoadHistoryRecord {
  id: string
  packageId: string
  packageName: string
  batchNumber: string
  loadTime: string
  operator: string
  duration: number
  status: 'success' | 'failed' | 'partial'
  recordStats: LoadStatsInfo
}

// 打包状态中文名称映射
export const PackageStatusLabels: Record<PackageStatus, string> = {
  pending: '待处理',
  packaged: '已打包',
  archived: '已归档'
}

// 加载状态中文名称映射
export const LoadStatusLabels: Record<LoadStatus, string> = {
  pending: '等待中',
  loading: '加载中',
  completed: '已完成',
  failed: '失败',
  paused: '已暂停'
}

// 加载模式中文名称映射
export const LoadModeLabels: Record<LoadMode, string> = {
  append: '追加模式',
  overwrite: '覆盖模式'
}
