'use server'

import { ServiceHandleAdjustment } from 'pxn/services/ServiceHandleAdjustment'

export const ActionHandleAdjustment = async ({
  requirementTranscription,
  readingSpeed,
}: {
  requirementTranscription: string
  readingSpeed: string
}): Promise<string> => {
  const serviceHandleAdjustment = new ServiceHandleAdjustment()
  return await serviceHandleAdjustment.handleAdjustment({
    requirementTranscription,
    readingSpeed,
  })
}
