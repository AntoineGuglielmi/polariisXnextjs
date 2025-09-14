import { ReadingSpeed } from './OtherTypes'

export type StringToTurnIntoVoice = string

export interface ActionTTSProps {
  stringToTurnIntoVoice: string
  readingSpeed: string
}

export interface TTSServiceProps {
  stringToTurnIntoVoice: StringToTurnIntoVoice
  readingSpeed: ReadingSpeed
}
