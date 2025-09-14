import { AudioBlob } from 'pxn/types/AudioTypes'
import { TTSServiceProps } from 'pxn/types/TTSTypes'

export interface TTSServiceInterface {
  run({
    stringToTurnIntoVoice,
    readingSpeed,
  }: TTSServiceProps): Promise<AudioBlob>
}
