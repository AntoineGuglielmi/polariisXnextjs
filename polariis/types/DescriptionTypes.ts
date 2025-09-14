import { PageScreenshot, PageSourceCode, ReadingSpeed } from './OtherTypes'
import { Requirement } from './RequirementTypes'

export type RawDescription = string
export type Description = string
export type DescriptionObject = {
  description: Description
}

export interface ActionDescriptionProps {
  requirement: Requirement
  screenshot: PageScreenshot
  sourceCode: PageSourceCode
  readingSpeed: ReadingSpeed
}

export interface DescriptionServiceProps {
  requirement: Requirement
  screenshot: PageScreenshot
  sourceCode: PageSourceCode
}
