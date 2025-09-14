'use server'

import { FactoryTranscriptionService } from 'pxn/services/factories/FactoryTranscriptionService'
import { Requirement, RequirementAudio } from 'pxn/types/RequirementTypes'

export const ActionTranscription = async (
  audioFile: RequirementAudio,
): Promise<Requirement> => {
  const service = FactoryTranscriptionService()
  return await service.run(audioFile)
}
