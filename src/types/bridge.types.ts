// 数据桥接服务相关类型定义

export type BridgeType =
  | 'basic_data'
  | 'route_plan'
  | 'air_task_order'
  | 'airspace_control'
  | 'special_task'
  | 'combat_target'
  | 'airspace_info'
  | 'plan_route'

export type BridgeStatus = 'active' | 'inactive' | 'error'

export interface BridgeNodeInfo {
  id: string
  name: string
  type: BridgeType
  source: {
    systemId: string
    systemName: string
    endpoint: string
  }
  target: {
    systemId: string
    systemName: string
    endpoint: string
  }
  status: BridgeStatus
  transferRate: number
  lastTransferTime: string
  dataTypes: string[]
}

export interface BridgeTransferStats {
  totalTransfers: number
  successRate: number
  totalDataSize: number
  avgTransferRate: number
  todayDataSize: number
  byType: Record<BridgeType, number>
}

export interface BridgeAlertInfo {
  id: string
  level: 'info' | 'warning' | 'error'
  bridgeId: string
  bridgeName: string
  message: string
  timestamp: string
  isAcknowledged: boolean
}

export interface BridgeHealthStatus {
  overallHealth: 'healthy' | 'degraded' | 'down'
  activeConnections: number
  totalConnections: number
  alertCount: number
}

// 桥接类型中文名称映射
export const BridgeTypeLabels: Record<BridgeType, string> = {
  basic_data: '作战基础数据',
  route_plan: '航线规划',
  air_task_order: '空中任务指令',
  airspace_control: '空域控制指令',
  special_task: '特殊任务指令',
  combat_target: '作战目标',
  airspace_info: '空域信息',
  plan_route: '计划航线'
}

// 桥接状态中文名称映射
export const BridgeStatusLabels: Record<BridgeStatus, string> = {
  active: '活跃',
  inactive: '未激活',
  error: '错误'
}
