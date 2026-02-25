// 数据打包推送与加载服务模拟数据

import type {
  DataPackageInfo,
  LoadingJobInfo,
  ExceptionDataInfo,
  LoadHistoryRecord
} from '../../types/package.types'

export const mockDataPackages: DataPackageInfo[] = [
  {
    id: 'pkg-001',
    batchNumber: 'BATCH-2026-024',
    name: '2月作战方案备份',
    description: '包含所有2月份的作战筹划方案数据',
    creator: '管理员',
    createTime: '2026-02-20T18:00:00Z',
    taskType: '作战筹划',
    tags: ['月度备份', '作战方案'],
    dataSize: 167503724544,
    recordCount: 1523456,
    includes: {
      replicas: true,
      resources: true,
      bridgeData: true,
      configs: false
    },
    status: 'packaged'
  },
  {
    id: 'pkg-002',
    batchNumber: 'BATCH-2026-025',
    name: '3月作战数据包',
    description: '3月份作战筹划及资源数据',
    creator: '张指挥',
    createTime: '2026-02-22T10:30:00Z',
    taskType: '作战筹划',
    tags: ['作战数据', '资源池'],
    dataSize: 89449675776,
    recordCount: 852341,
    includes: {
      replicas: true,
      resources: true,
      bridgeData: false,
      configs: true
    },
    status: 'packaged'
  },
  {
    id: 'pkg-003',
    batchNumber: 'BATCH-2026-023',
    name: '1月历史数据归档',
    description: '1月份所有历史数据归档备份',
    creator: '系统自动',
    createTime: '2026-02-01T00:00:00Z',
    taskType: '数据归档',
    tags: ['归档', '历史数据'],
    dataSize: 214748364800,
    recordCount: 2145678,
    includes: {
      replicas: true,
      resources: true,
      bridgeData: true,
      configs: true
    },
    status: 'archived'
  },
  {
    id: 'pkg-004',
    batchNumber: 'BATCH-2026-026',
    name: '演习数据备份',
    description: '联合演习数据完整备份',
    creator: '李参谋',
    createTime: '2026-02-18T16:45:00Z',
    taskType: '演习演练',
    tags: ['演习', '训练数据'],
    dataSize: 52428800,
    recordCount: 45678,
    includes: {
      replicas: true,
      resources: true,
      bridgeData: false,
      configs: false
    },
    status: 'packaged'
  },
  {
    id: 'pkg-005',
    batchNumber: 'BATCH-2026-027',
    name: '待处理数据包',
    description: '待处理的新数据包',
    creator: '王处长',
    createTime: '2026-02-24T09:00:00Z',
    taskType: '数据备份',
    tags: ['待处理'],
    dataSize: 0,
    recordCount: 0,
    includes: {
      replicas: false,
      resources: false,
      bridgeData: false,
      configs: false
    },
    status: 'pending'
  }
]

export const mockLoadingJob: LoadingJobInfo = {
  id: 'job-001',
  packageId: 'pkg-002',
  packageName: '3月作战数据包',
  status: 'loading',
  progress: 67,
  currentStep: '导入兵力资源数据',
  startTime: '2026-02-24T11:00:00Z',
  endTime: null,
  duration: 2700000,
  mode: 'append',
  stats: {
    totalRecords: 852341,
    successRecords: 570468,
    failedRecords: 234,
    skippedRecords: 1245,
    tablesUpdated: ['兵力表', '弹药表', '航线表'],
    successRate: 99.86
  }
}

export const mockExceptionData: ExceptionDataInfo[] = [
  {
    id: 'exc-001',
    loadJobId: 'job-001',
    tableName: '兵力资源表',
    recordData: {
      unit_id: 'UNIT-999',
      unit_type: '歼-35',
      quantity: -5
    },
    exceptionType: 'DATA_VALIDATION_ERROR',
    exceptionMessage: '数量字段不能为负数',
    timestamp: '2026-02-24T11:15:30Z',
    isResolved: false
  },
  {
    id: 'exc-002',
    loadJobId: 'job-001',
    tableName: '弹药资源表',
    recordData: {
      ammo_id: 'AMMO-888',
      ammo_name: 'PL-15',
      quantity: 'NaN',
      unit: '枚'
    },
    exceptionType: 'TYPE_ERROR',
    exceptionMessage: '数量字段类型错误，应为数字',
    timestamp: '2026-02-24T11:18:45Z',
    isResolved: false
  },
  {
    id: 'exc-003',
    loadJobId: 'job-001',
    tableName: '航线规划表',
    recordData: {
      route_id: 'ROUTE-123',
      start_point: 'INVALID_COORD',
      end_point: 'INVALID_COORD',
      altitude: 8000
    },
    exceptionType: 'VALIDATION_ERROR',
    exceptionMessage: '坐标格式无效，应为经纬度格式',
    timestamp: '2026-02-24T11:22:10Z',
    isResolved: false
  },
  {
    id: 'exc-004',
    loadJobId: 'job-001',
    tableName: '系统配置表',
    recordData: {
      config_key: 'system.timeout',
      config_value: 3000000000
    },
    exceptionType: 'CONSTRAINT_ERROR',
    exceptionMessage: '配置值超出允许范围',
    timestamp: '2026-02-24T11:25:30Z',
    isResolved: true
  },
  {
    id: 'exc-005',
    loadJobId: 'job-001',
    tableName: '作战目标表',
    recordData: {
      target_id: 'TARGET-456',
      target_type: 'unknown',
      priority: 'high',
      location: null
    },
    exceptionType: 'NULL_CONSTRAINT',
    exceptionMessage: '位置信息不能为空',
    timestamp: '2026-02-24T11:28:15Z',
    isResolved: false
  }
]

export const mockLoadHistory: LoadHistoryRecord[] = [
  {
    id: 'hist-001',
    packageId: 'pkg-001',
    packageName: '2月作战方案备份',
    batchNumber: 'BATCH-2026-024',
    loadTime: '2026-02-22T14:30:00Z',
    operator: '张管理员',
    duration: 3600000,
    status: 'success',
    recordStats: {
      totalRecords: 1523456,
      successRecords: 1523200,
      failedRecords: 56,
      skippedRecords: 200,
      tablesUpdated: ['副本表', '资源表', '配置表'],
      successRate: 99.99
    }
  },
  {
    id: 'hist-002',
    packageId: 'pkg-003',
    packageName: '1月历史数据归档',
    batchNumber: 'BATCH-2026-023',
    loadTime: '2026-02-10T09:00:00Z',
    operator: '系统自动',
    duration: 7200000,
    status: 'success',
    recordStats: {
      totalRecords: 2145678,
      successRecords: 2145100,
      failedRecords: 478,
      skippedRecords: 100,
      tablesUpdated: ['副本表', '资源表', '桥接表', '配置表'],
      successRate: 99.97
    }
  },
  {
    id: 'hist-003',
    packageId: 'pkg-004',
    packageName: '演习数据备份',
    batchNumber: 'BATCH-2026-026',
    loadTime: '2026-02-19T16:00:00Z',
    operator: '李参谋',
    duration: 300000,
    status: 'partial',
    recordStats: {
      totalRecords: 45678,
      successRecords: 45120,
      failedRecords: 558,
      skippedRecords: 0,
      tablesUpdated: ['副本表', '资源表'],
      successRate: 98.78
    }
  },
  {
    id: 'hist-004',
    packageId: 'pkg-002',
    packageName: '3月作战数据包',
    batchNumber: 'BATCH-2026-025',
    loadTime: '2026-02-23T11:30:00Z',
    operator: '王处长',
    duration: 1800000,
    status: 'success',
    recordStats: {
      totalRecords: 852341,
      successRecords: 852000,
      failedRecords: 341,
      skippedRecords: 0,
      tablesUpdated: ['副本表', '资源表', '配置表'],
      successRate: 99.96
    }
  }
]

// 按作业ID分组的异常数据
export const mockExceptionDataByJob: Record<string, ExceptionDataInfo[]> = {
  'job-001': mockExceptionData
}
