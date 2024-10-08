import { type CostsUnit } from '~/server/features/scaling/get-scaling-costs-entries'
import { formatCurrency } from '~/utils/format'
import { formatNumber } from '~/utils/format-number'

export function formatCostValue(value: number, unit: CostsUnit) {
  if (unit === 'gas') {
    return formatNumber(value)
  }

  return formatCurrency(value, unit)
}
