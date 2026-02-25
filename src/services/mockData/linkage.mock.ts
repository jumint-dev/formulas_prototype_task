// 多级联动筹划模拟数据

import type {
  ForceResourceSummary,
  AircraftItem,
  AmmoResource,
  ForceResourcePool,
  AmmoResourcePool,
  LevelResourceInfo,
  ConnectedSystemInfo
} from '../../types/linkage.types'

export const mockForceSummary: ForceResourceSummary = {
  totalUnits: 342,
  availableUnits: 287,
  utilizationRate: 84.2,
  byLevel: {
    1: 45,
    2: 78,
    3: 92,
    4: 67,
    5: 60
  },
  byType: {
    '战斗机': 156,
    '轰炸机': 45,
    '运输机': 67,
    '直升机': 74
  }
}

export const mockAircraftResources: AircraftItem[] = [
  {
    id: 'ac-001',
    type: '歼-20',
    quantity: {
      total: 24,
      available: 18,
      inMission: 4,
      maintenance: 2
    },
    base: '华东基地',
    level: 2,
    capabilities: ['制空', '对地攻击']
  },
  {
    id: 'ac-002',
    type: '歼-16',
    quantity: {
      total: 32,
      available: 24,
      inMission: 6,
      maintenance: 2
    },
    base: '华东基地',
    level: 2,
    capabilities: ['制空', '对地攻击', '电子战']
  },
  {
    id: 'ac-003',
    type: '歼-10C',
    quantity: {
      total: 28,
      available: 22,
      inMission: 4,
      maintenance: 2
    },
    base: '华南基地',
    level: 3,
    capabilities: ['制空', '对地攻击']
  },
  {
    id: 'ac-004',
    type: '轰-6K',
    quantity: {
      total: 16,
      available: 12,
      inMission: 3,
      maintenance: 1
    },
    base: '西部基地',
    level: 2,
    capabilities: ['远程打击', '反舰']
  },
  {
    id: 'ac-005',
    type: '运-20',
    quantity: {
      total: 12,
      available: 8,
      inMission: 3,
      maintenance: 1
    },
    base: '中部基地',
    level: 1,
    capabilities: ['运输', '空投']
  },
  {
    id: 'ac-006',
    type: '直-10',
    quantity: {
      total: 20,
      available: 16,
      inMission: 3,
      maintenance: 1
    },
    base: '北部基地',
    level: 4,
    capabilities: ['对地攻击', '侦察']
  },
  {
    id: 'ac-007',
    type: '歼-35',
    quantity: {
      total: 8,
      available: 6,
      inMission: 1,
      maintenance: 1
    },
    base: '东部基地',
    level: 1,
    capabilities: ['制空', '隐身突防']
  },
  {
    id: 'ac-008',
    type: '苏-35',
    quantity: {
      total: 18,
      available: 14,
      inMission: 3,
      maintenance: 1
    },
    base: '南部基地',
    level: 3,
    capabilities: ['制空', '对地攻击']
  }
]

export const mockAmmoResources: AmmoResource[] = [
  {
    id: 'ammo-001',
    type: '空空导弹',
    name: 'PL-15',
    quantity: 342,
    unit: '枚',
    alertLevel: 'normal',
    level: 2
  },
  {
    id: 'ammo-002',
    type: '制导炸弹',
    name: 'LT-3',
    quantity: 45,
    unit: '枚',
    alertLevel: 'low',
    level: 3
  },
  {
    id: 'ammo-003',
    type: '空空导弹',
    name: 'PL-10',
    quantity: 528,
    unit: '枚',
    alertLevel: 'normal',
    level: 2
  },
  {
    id: 'ammo-004',
    type: '反舰导弹',
    name: 'YJ-12',
    quantity: 78,
    unit: '枚',
    alertLevel: 'normal',
    level: 1
  },
  {
    id: 'ammo-005',
    type: '制导炸弹',
    name: 'LS-6',
    quantity: 12,
    unit: '枚',
    alertLevel: 'critical',
    level: 4
  },
  {
    id: 'ammo-006',
    type: '空地导弹',
    name: 'KD-88',
    quantity: 156,
    unit: '枚',
    alertLevel: 'normal',
    level: 3
  },
  {
    id: 'ammo-007',
    type: '电子战吊舱',
    name: 'KG-600',
    quantity: 24,
    unit: '套',
    alertLevel: 'low',
    level: 2
  },
  {
    id: 'ammo-008',
    type: '巡航导弹',
    name: 'CJ-100',
    quantity: 8,
    unit: '枚',
    alertLevel: 'critical',
    level: 1
  }
]

export const mockForcePool: ForceResourcePool = {
  totalUnits: 342,
  availableUnits: 287,
  aircraft: mockAircraftResources,
  personnel: [],
  equipment: [],
  lastUpdateTime: new Date('2026-02-24T11:30:00Z')
}

export const mockAmmoPool: AmmoResourcePool = {
  totalTypes: 8,
  items: mockAmmoResources,
  lastUpdateTime: new Date('2026-02-24T11:30:00Z')
}

export const mockLevelResources: LevelResourceInfo[] = [
  {
    level: 1,
    name: '战区级',
    isConnected: true,
    forceResource: { total: 45, available: 38 },
    ammoResource: { types: 12, totalItems: 1245 },
    lastReportTime: '2026-02-24T11:30:00Z'
  },
  {
    level: 2,
    name: '集团军级',
    isConnected: true,
    forceResource: { total: 78, available: 65 },
    ammoResource: { types: 15, totalItems: 2341 },
    lastReportTime: '2026-02-24T11:28:00Z'
  },
  {
    level: 3,
    name: '师级',
    isConnected: true,
    forceResource: { total: 92, available: 78 },
    ammoResource: { types: 18, totalItems: 3456 },
    lastReportTime: '2026-02-24T11:25:00Z'
  },
  {
    level: 4,
    name: '旅级',
    isConnected: true,
    forceResource: { total: 67, available: 56 },
    ammoResource: { types: 10, totalItems: 1876 },
    lastReportTime: '2026-02-24T11:20:00Z'
  },
  {
    level: 5,
    name: '团级',
    isConnected: false,
    forceResource: { total: 60, available: 50 },
    ammoResource: { types: 8, totalItems: 987 },
    lastReportTime: '2026-02-24T10:45:00Z'
  }
]

export const mockConnectedSystems: ConnectedSystemInfo[] = [
  {
    id: 'sys-001',
    name: '战区指挥系统',
    type: 'C2',
    level: 1,
    connectionStatus: 'connected',
    lastAccessTime: '2026-02-24T11:45:00Z',
    accessCount: 1247
  },
  {
    id: 'sys-002',
    name: '空中任务系统',
    type: 'C4ISR',
    level: 2,
    connectionStatus: 'connected',
    lastAccessTime: '2026-02-24T11:43:00Z',
    accessCount: 856
  },
  {
    id: 'sys-003',
    name: '后勤保障系统',
    type: 'Logistics',
    level: 3,
    connectionStatus: 'connected',
    lastAccessTime: '2026-02-24T11:40:00Z',
    accessCount: 634
  },
  {
    id: 'sys-004',
    name: '情报处理系统',
    type: 'Intelligence',
    level: 2,
    connectionStatus: 'connected',
    lastAccessTime: '2026-02-24T11:38:00Z',
    accessCount: 923
  },
  {
    id: 'sys-005',
    name: '防空指挥系统',
    type: 'C2',
    level: 4,
    connectionStatus: 'error',
    lastAccessTime: '2026-02-24T10:30:00Z',
    accessCount: 445
  },
  {
    id: 'sys-006',
    name: '电子战系统',
    type: 'C4ISR',
    level: 3,
    connectionStatus: 'connected',
    lastAccessTime: '2026-02-24T11:35:00Z',
    accessCount: 567
  },
  {
    id: 'sys-007',
    name: '团级指挥系统',
    type: 'C2',
    level: 5,
    connectionStatus: 'disconnected',
    lastAccessTime: '2026-02-24T09:15:00Z',
    accessCount: 234
  },
  {
    id: 'sys-008',
    name: '空域管理系统',
    type: 'C4ISR',
    level: 2,
    connectionStatus: 'connected',
    lastAccessTime: '2026-02-24T11:42:00Z',
    accessCount: 1089
  }
]
