'use server'

import { AdapterDescription } from 'pxn/adapters/AdapterDescription'
import { ServiceGetDescriptionMistral } from 'pxn/services/ServiceGetDescriptionMistral'
import { ServiceTTSEleven } from 'pxn/services/ServiceTTSEleven'
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
  reading_speed,
}: {
  requirement: Requirement
  screenshot: PageScreenshot
  sourceCode: PageSourceCode
  reading_speed: ReadingSpeed
}): Promise<AudioBlob> => {
  const descriptionService = new ServiceGetDescriptionMistral()
  const ttsService = new ServiceTTSEleven()
  const rawDescription = await descriptionService.describe({
    requirement,
    screenshot,
    sourceCode,
  })
  const descriptionObject = AdapterDescription(rawDescription)
  const { description } = descriptionObject
  console.log({
    description,
  })
  const audioDescription = await ttsService.generateVoice({
    stringToTurnIntoVoice: description,
    reading_speed,
  })
  return audioDescription
}
