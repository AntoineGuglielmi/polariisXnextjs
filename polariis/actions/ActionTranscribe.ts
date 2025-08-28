'use server'

import { ServiceTranscribeMistral } from 'pxn/services/ServiceTranscribeMistral'
import { Requirement, RequirementAudio } from 'pxn/types/RequirementTypes'

export const ActionTranscribe = async (
  audioFile: RequirementAudio,
): Promise<Requirement> => {
  const service = new ServiceTranscribeMistral()
  return await service.transcribe(audioFile)
}
