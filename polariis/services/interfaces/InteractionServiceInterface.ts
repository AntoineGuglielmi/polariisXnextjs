import {
  InteractionServiceProps,
  RawInteraction,
} from 'pxn/types/InteractionTypes'

export interface InteractionServiceInterface {
  run({
    requirement,
    screenshot,
    sourceCode,
  }: InteractionServiceProps): Promise<RawInteraction>
}
