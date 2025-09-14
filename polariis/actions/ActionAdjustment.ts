'use server'

import { FactoryAdjustmentService } from 'pxn/services/factories/FactoryAdjustmentService'
import { ActionAdjustmentProps } from 'pxn/types/AdjustmentTypes'

export const ActionAdjustment = async ({
  requirement,
  readingSpeed,
}: ActionAdjustmentProps): Promise<string> => {
  const serviceAdjustment = FactoryAdjustmentService()
  return await serviceAdjustment.run({
    requirement,
    readingSpeed,
  })
}
