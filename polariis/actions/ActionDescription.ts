'use server'

import { AdapterDescription } from 'pxn/adapters/AdapterDescription'
import { FactoryDescriptionService } from 'pxn/services/factories/FactoryDescriptionService'
import { FactoryTTSService } from 'pxn/services/factories/FactoryTTSService'
import { AudioBlob } from 'pxn/types/AudioTypes'
import { ActionDescriptionProps } from 'pxn/types/DescriptionTypes'

export const ActionDescription = async ({
  requirement,
  screenshot,
  sourceCode,
  readingSpeed,
}: ActionDescriptionProps): Promise<AudioBlob> => {
  const descriptionService = FactoryDescriptionService()
  const ttsService = FactoryTTSService()
  const rawDescription = await descriptionService.run({
    requirement,
    screenshot,
    sourceCode,
  })
  const descriptionObject = AdapterDescription(rawDescription)
  const { description } = descriptionObject
  console.log({
    description,
  })
  const audioDescription = await ttsService.run({
    stringToTurnIntoVoice: description,
    readingSpeed,
  })
  return audioDescription
}
