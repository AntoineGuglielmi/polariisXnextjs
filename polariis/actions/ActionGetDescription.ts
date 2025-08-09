'use server'

import { ServiceGetDescriptionMistral } from 'pxn/services/ServiceGetDescriptionMistral'

export const ActionGetDescription = async ({
  requirement,
  screenshot,
  sourceCode,
}: {
  requirement: string
  screenshot: string
  sourceCode: string
}): Promise<string> => {
  const descriptionService = new ServiceGetDescriptionMistral()
  return await descriptionService.describe({
    requirement,
    screenshot,
    sourceCode,
  })
}
