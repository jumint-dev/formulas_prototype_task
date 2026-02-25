// 数据桥接服务模拟数据

import type {
  BridgeNodeInfo,
  BridgeTransferStats,
  BridgeAlertInfo
} from '../../types/bridge.types'

export const mockBridgeNodes: BridgeNodeInfo[] = [
  {
    id: 'bridge-001',
    name: '作战基础数据桥接',
    type: 'basic_data',
    source: {
      systemId: 'sys-001',
      systemName: '战区指挥系统',
      endpoint: 'tcp://192.168.1.100:8001'
    },
    target: {
      systemId: 'sys-center',
      systemName: '数据中心',
      endpoint: 'tcp://192.168.1.200:9001'
    },
    status: 'active',
    transferRate: 1073741824,
    lastTransferTime: '2026-02-24T11:50:00Z',
    dataTypes: ['目标数据', '环境数据', '气象数据']
  },
  {
    id: 'bridge-002',
    name: '空中任务指令桥接',
    type: 'air_task_order',
    source: {
      systemId: 'sys-002',
      systemName: '空中任务系统',
      endpoint: 'tcp://192.168.1.101:8002'
    },
    target: {
      systemId: 'sys-center',
      systemName: '数据中心',
      endpoint: 'tcp://192.168.1.200:9001'
    },
    status: 'active',
    transferRate: 536870912,
    lastTransferTime: '2026-02-24T11:48:30Z',
    dataTypes: ['任务指令', '飞行计划', '协同数据']
  },
  {
    id: 'bridge-003',
    name: '航线规划数据桥接',
    type: 'route_plan',
    source: {
      systemId: 'sys-008',
      systemName: '空域管理系统',
      endpoint: 'tcp://192.168.1.108:8008'
    },
    target: {
      systemId: 'sys-center',
      systemName: '数据中心',
      endpoint: 'tcp://192.168.1.200:9001'
    },
    status: 'active',
    transferRate: 671088640,
    lastTransferTime: '2026-02-24T11:47:15Z',
    dataTypes: ['航线数据', '航路点', '高度层']
  },
  {
    id: 'bridge-004',
    name: '空域控制指令桥接',
    type: 'airspace_control',
    source: {
      systemId: 'sys-008',
      systemName: '空域管理系统',
      endpoint: 'tcp://192.168.1.108:8008'
    },
    target: {
      systemId: 'sys-001',
      systemName: '战区指挥系统',
      endpoint: 'tcp://192.168.1.100:8001'
    },
    status: 'active',
    transferRate: 268435456,
    lastTransferTime: '2026-02-24T11:46:00Z',
    dataTypes: ['空域控制', '禁飞区', '限制区']
  },
  {
    id: 'bridge-005',
    name: '特殊任务指令桥接',
    type: 'special_task',
    source: {
      systemId: 'sys-006',
      systemName: '电子战系统',
      endpoint: 'tcp://192.168.1.106:8006'
    },
    target: {
      systemId: 'sys-002',
      systemName: '空中任务系统',
      endpoint: 'tcp://192.168.1.101:8002'
    },
    status: 'active',
    transferRate: 134217728,
    lastTransferTime: '2026-02-24T11:44:45Z',
    dataTypes: ['电子战任务', '干扰任务', '侦察任务']
  },
  {
    id: 'bridge-006',
    name: '作战目标信息桥接',
    type: 'combat_target',
    source: {
      systemId: 'sys-004',
      systemName: '情报处理系统',
      endpoint: 'tcp://192.168.1.104:8004'
    },
    target: {
      systemId: 'sys-center',
      systemName: '数据中心',
      endpoint: 'tcp://192.168.1.200:9001'
    },
    status: 'active',
    transferRate: 805306368,
    lastTransferTime: '2026-02-24T11:43:30Z',
    dataTypes: ['目标信息', '威胁评估', '打击建议']
  },
  {
    id: 'bridge-007',
    name: '空域信息桥接',
    type: 'airspace_info',
    source: {
      systemId: 'sys-008',
      systemName: '空域管理系统',
      endpoint: 'tcp://192.168.1.108:8008'
    },
    target: {
      systemId: 'sys-center',
      systemName: '数据中心',
      endpoint: 'tcp://192.168.1.200:9001'
    },
    status: 'active',
    transferRate: 402653184,
    lastTransferTime: '2026-02-24T11:42:15Z',
    dataTypes: ['空域状态', '飞行情报', '气象通报']
  },
  {
    id: 'bridge-008',
    name: '计划航线桥接',
    type: 'plan_route',
    source: {
      systemId: 'sys-002',
      systemName: '空中任务系统',
      endpoint: 'tcp://192.168.1.101:8002'
    },
    target: {
      systemId: 'sys-008',
      systemName: '空域管理系统',
      endpoint: 'tcp://192.168.1.108:8008'
    },
    status: 'inactive',
    transferRate: 0,
    lastTransferTime: '2026-02-24T10:30:00Z',
    dataTypes: ['计划航线', '时间协调', '航线冲突检测']
  }
]

export const mockTransferStats: BridgeTransferStats = {
  totalTransfers: 15234,
  successRate: 99.7,
  totalDataSize: 2638827906662.4,
  avgTransferRate: 838860800,
  todayDataSize: 167503724544,
  byType: {
    basic_data: 450,
    route_plan: 320,
    air_task_order: 280,
    airspace_control: 190,
    special_task: 85,
    combat_target: 520,
    airspace_info: 310,
    plan_route: 290
  }
}

export const mockBridgeAlerts: BridgeAlertInfo[] = [
  {
    id: 'alert-001',
    level: 'warning',
    bridgeId: 'bridge-003',
    bridgeName: '航线规划数据桥接',
    message: '传输速率下降至正常值的70%，请检查网络连接',
    timestamp: '2026-02-24T11:30:00Z',
    isAcknowledged: false
  },
  {
    id: 'alert-002',
    level: 'error',
    bridgeId: 'bridge-008',
    bridgeName: '计划航线桥接',
    message: '连接中断，目标系统无响应',
    timestamp: '2026-02-24T10:30:00Z',
    isAcknowledged: false
  },
  {
    id: 'alert-003',
    level: 'info',
    bridgeId: 'bridge-001',
    bridgeName: '作战基础数据桥接',
    message: '数据同步完成，共处理1250条记录',
    timestamp: '2026-02-24T11:50:00Z',
    isAcknowledged: true
  },
  {
    id: 'alert-004',
    level: 'warning',
    bridgeId: 'bridge-006',
    bridgeName: '作战目标信息桥接',
    message: '数据积压，处理延迟增加',
    timestamp: '2026-02-24T11:25:00Z',
    isAcknowledged: false
  }
]
