import { FeedBack, ReadingSpeed } from './OtherTypes'
import { Requirement } from './RequirementTypes'

export interface AdjustmentServiceProps {
  requirement: Requirement
  readingSpeed: ReadingSpeed
}
export type RawAdjustement = string
export interface Adjustment {
  readingSpeed: ReadingSpeed
  feedback: FeedBack
}
