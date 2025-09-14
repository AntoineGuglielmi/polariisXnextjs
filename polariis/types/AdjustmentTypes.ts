import { FeedBack, ReadingSpeed } from './OtherTypes'
import { Requirement } from './RequirementTypes'

export interface ActionAdjustmentProps {
  requirement: Requirement
  readingSpeed: ReadingSpeed
}

export interface AdjustmentServiceProps {
  requirement: Requirement
  readingSpeed: ReadingSpeed
}
export type RawAdjustement = string
export interface Adjustment {
  readingSpeed: ReadingSpeed
  feedback: FeedBack
}
