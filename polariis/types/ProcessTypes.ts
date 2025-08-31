import { Requirement, RequirementAudio } from './RequirementTypes'
import { RUO } from './RUOTypes'

export interface ContextProcessState {
  requirementAudio: RequirementAudio | null
  requirement: Requirement | null
  RUO: RUO | null
}
