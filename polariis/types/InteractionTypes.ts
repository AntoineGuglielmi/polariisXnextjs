import { PageScreenshot, PageSourceCode } from './OtherTypes'
import { Requirement } from './RequirementTypes'

export type RawInteraction = string

export type Action = 'click' | 'focus'
export type Target = string
export type Interaction = {
  action: Action
  target: Target
}
export type Interactions = Array<Interaction>

export interface ActionGetInteractionsProps {
  requirement: Requirement
  screenshot: PageScreenshot
  sourceCode: PageSourceCode
}
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface InteractionServiceProps extends ActionGetInteractionsProps {}
