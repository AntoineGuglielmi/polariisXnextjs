import { Requirement, RequirementAudio } from 'pxn/types/RequirementTypes'

export interface TranscriptionServiceInterface {
  run(audioRequirement: RequirementAudio): Promise<Requirement>
}
