// 多副本数据服务模拟数据

import type {
  ReplicaListItem,
  ReplicaDetail,
  VersionItem,
  ReplicaSyncStatus
} from '../../types/multiReplica.types'

export const mockReplicas: ReplicaListItem[] = [
  {
    id: 'rep-001',
    name: '对地打击方案 Alpha',
    replicaIndex: 1,
    version: 'v3.2.1',
    status: 'active',
    syncStatus: 'synced',
    createTime: '2026-02-20T08:30:00Z',
    creator: '张指挥',
    dataSize: 245862400
  },
  {
    id: 'rep-002',
    name: '对地打击方案 Alpha',
    replicaIndex: 2,
    version: 'v3.2.1',
    status: 'active',
    syncStatus: 'synced',
    createTime: '2026-02-20T08:30:00Z',
    creator: '张指挥',
    dataSize: 245862400
  },
  {
    id: 'rep-003',
    name: '对地打击方案 Alpha',
    replicaIndex: 3,
    version: 'v3.2.1',
    status: 'active',
    syncStatus: 'syncing',
    createTime: '2026-02-20T08:30:00Z',
    creator: '张指挥',
    dataSize: 245862400
  },
  {
    id: 'rep-004',
    name: '空中封锁方案 Beta',
    replicaIndex: 1,
    version: 'v2.1.0',
    status: 'active',
    syncStatus: 'synced',
    createTime: '2026-02-18T14:20:00Z',
    creator: '李参谋',
    dataSize: 178456789
  },
  {
    id: 'rep-005',
    name: '空中封锁方案 Beta',
    replicaIndex: 2,
    version: 'v2.1.0',
    status: 'active',
    syncStatus: 'synced',
    createTime: '2026-02-18T14:20:00Z',
    creator: '李参谋',
    dataSize: 178456789
  },
  {
    id: 'rep-006',
    name: '空中封锁方案 Beta',
    replicaIndex: 3,
    version: 'v2.1.0',
    status: 'active',
    syncStatus: 'error',
    createTime: '2026-02-18T14:20:00Z',
    creator: '李参谋',
    dataSize: 178456789
  },
  {
    id: 'rep-007',
    name: '区域防空方案 Gamma',
    replicaIndex: 1,
    version: 'v1.5.2',
    status: 'archived',
    syncStatus: 'synced',
    createTime: '2026-02-10T09:15:00Z',
    creator: '王处长',
    dataSize: 156789123
  },
  {
    id: 'rep-008',
    name: '区域防空方案 Gamma',
    replicaIndex: 2,
    version: 'v1.5.2',
    status: 'archived',
    syncStatus: 'synced',
    createTime: '2026-02-10T09:15:00Z',
    creator: '王处长',
    dataSize: 156789123
  }
]

export const mockReplicaDetails: Record<string, ReplicaDetail> = {
  'rep-001': {
    id: 'rep-001',
    name: '对地打击方案 Alpha',
    replicaIndex: 1,
    version: 'v3.2.1',
    status: 'active',
    syncStatus: 'synced',
    createTime: '2026-02-20T08:30:00Z',
    creator: '张指挥',
    dataSize: 245862400,
    description: '针对敌方地面高价值目标的精确打击方案，包含多机型协同作战计划。',
    updateTime: '2026-02-24T10:30:00Z',
    metadata: {
      taskType: '对地打击',
      priority: 1,
      tags: ['高优先级', '多机型协同', '精确打击'],
      attachments: ['作战地图.png', '目标清单.xlsx']
    }
  }
}

export const mockVersions: VersionItem[] = [
  {
    id: 'ver-001',
    version: 'v3.2.1',
    createTime: '2026-02-20T08:30:00Z',
    creator: '张指挥',
    changeLog: '更新目标坐标，增加航线规划',
    dataSize: 245862400,
    isCurrent: true
  },
  {
    id: 'ver-002',
    version: 'v3.2.0',
    createTime: '2026-02-18T14:20:00Z',
    creator: '李参谋',
    changeLog: '优化兵力配置',
    dataSize: 231456789,
    isCurrent: false
  },
  {
    id: 'ver-003',
    version: 'v3.1.5',
    createTime: '2026-02-15T10:00:00Z',
    creator: '王处长',
    changeLog: '修复数据同步问题',
    dataSize: 228456123,
    isCurrent: false
  },
  {
    id: 'ver-004',
    version: 'v3.1.0',
    createTime: '2026-02-12T16:45:00Z',
    creator: '张指挥',
    changeLog: '增加新的作战单位',
    dataSize: 215678900,
    isCurrent: false
  },
  {
    id: 'ver-005',
    version: 'v3.0.0',
    createTime: '2026-02-08T09:30:00Z',
    creator: '李参谋',
    changeLog: '初始版本发布',
    dataSize: 198765432,
    isCurrent: false
  }
]

export const mockSyncStatus: ReplicaSyncStatus = {
  isSyncing: true,
  progress: 67,
  replicaHealth: {
    1: true,
    2: true,
    3: false
  },
  lastSyncTime: '2026-02-24T10:15:00Z',
  errorCount: 1
}

// 按副本ID分组版本
export const mockVersionsByReplica: Record<string, VersionItem[]> = {
  'rep-001': mockVersions,
  'rep-002': mockVersions,
  'rep-003': mockVersions
}
