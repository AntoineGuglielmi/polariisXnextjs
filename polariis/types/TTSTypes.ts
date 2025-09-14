import { ReadingSpeed } from './OtherTypes'

export type StringToTurnIntoVoice = string

export interface TTSServiceProps {
  stringToTurnIntoVoice: StringToTurnIntoVoice
  readingSpeed: ReadingSpeed
}
