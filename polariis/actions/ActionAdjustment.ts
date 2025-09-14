'use server'

import { FactoryAdjustmentService } from 'pxn/services/factories/FactoryAdjustmentService'
import { ReadingSpeed } from 'pxn/types/OtherTypes'
import { Requirement } from 'pxn/types/RequirementTypes'

export const ActionAdjustment = async ({
  requirement,
  readingSpeed,
}: {
  requirement: Requirement
  readingSpeed: ReadingSpeed
}): Promise<string> => {
  const serviceAdjustment = FactoryAdjustmentService()
  return await serviceAdjustment.run({
    requirement,
    readingSpeed,
  })
}
