import { UnixTime } from '@l2beat/shared-pure'
import { Insertable, Selectable } from 'kysely'
import { ZkSync } from '../../kysely/generated/types'

export interface ZkSyncTransactionRecord {
  blockNumber: number
  blockIndex: number
  timestamp: UnixTime
}

export function toRow(record: ZkSyncTransactionRecord): Insertable<ZkSync> {
  return {
    unix_timestamp: record.timestamp.toDate(),
    block_number: record.blockNumber,
    block_index: record.blockIndex,
  }
}

export function toRecord(row: Selectable<ZkSync>): ZkSyncTransactionRecord {
  return {
    blockNumber: row.block_number,
    blockIndex: row.block_index,
    timestamp: UnixTime.fromDate(row.unix_timestamp),
  }
}
