type AIClient = 'mistral' | 'openai' | 'eleven'

export interface AIConfig {
  transcription: AIClient
  vision: AIClient
  chat: AIClient
  RUO: AIClient
  adjustment: AIClient
  TTS: AIClient
}
