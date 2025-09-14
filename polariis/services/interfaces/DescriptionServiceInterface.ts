import {
  DescriptionServiceProps,
  RawDescription,
} from 'pxn/types/DescriptionTypes'

export interface DescriptionServiceInterface {
  run({
    requirement,
    screenshot,
    sourceCode,
  }: DescriptionServiceProps): Promise<RawDescription>
}
