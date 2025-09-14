import {
  AdjustmentServiceProps,
  RawAdjustement,
} from 'pxn/types/AdjustmentTypes'

export interface AdjustmentServiceInterface {
  run({
    requirement,
    readingSpeed,
  }: AdjustmentServiceProps): Promise<RawAdjustement>
}
