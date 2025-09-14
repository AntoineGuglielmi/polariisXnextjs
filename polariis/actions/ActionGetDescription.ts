'use server'

import { AdapterDescription } from 'pxn/adapters/AdapterDescription'
import { FactoryDescriptionService } from 'pxn/services/factories/FactoryDescriptionService'
import { FactoryTTSService } from 'pxn/services/factories/FactoryTTSService'
import { AudioBlob } from 'pxn/types/AudioTypes'
import {
  PageScreenshot,
  PageSourceCode,
  ReadingSpeed,
} from 'pxn/types/OtherTypes'
import { Requirement } from 'pxn/types/RequirementTypes'

export const ActionGetDescription = async ({
  requirement,
  screenshot,
  sourceCode,
  readingSpeed,
}: {
  requirement: Requirement
  screenshot: PageScreenshot
  sourceCode: PageSourceCode
  readingSpeed: ReadingSpeed
}): Promise<AudioBlob> => {
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
