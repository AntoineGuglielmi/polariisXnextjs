'use server'

import { ServiceGetDescriptionMistral } from 'pxn/services/ServiceGetDescriptionMistral'
import { ServiceTTSEleven } from 'pxn/services/ServiceTTSEleven'

export const ActionGetDescription = async ({
  requirement,
  screenshot,
  sourceCode,
}: {
  requirement: string
  screenshot: string
  sourceCode: string
}): Promise<Blob> => {
  const descriptionService = new ServiceGetDescriptionMistral()
  const ttsService = new ServiceTTSEleven()
  const { description: stringDescription } = JSON.parse(
    await descriptionService.describe({
      requirement,
      screenshot,
      sourceCode,
    }),
  )
  console.log({
    stringDescription,
  })
  const audioDescription = await ttsService.speak(stringDescription)
  return audioDescription
}
