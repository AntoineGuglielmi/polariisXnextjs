import { Requirement } from 'pxn/types/RequirementTypes'
import { RawRUO } from 'pxn/types/RUOTypes'

export interface RUOServiceInterface {
  run(requirement: Requirement): Promise<RawRUO>
}
