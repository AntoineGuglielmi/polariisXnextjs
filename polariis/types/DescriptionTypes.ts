import { PageScreenshot, PageSourceCode } from './OtherTypes'
import { Requirement } from './RequirementTypes'

export type RawDescription = string
export type Description = string
export type DescriptionObject = {
  description: Description
}
export interface DescriptionServiceProps {
  requirement: Requirement
  screenshot: PageScreenshot
  sourceCode: PageSourceCode
}
