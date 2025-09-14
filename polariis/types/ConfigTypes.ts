type AIClient = 'mistral' | 'openai' | 'eleven'

export interface AIConfig {
  transcription: AIClient
  description: AIClient
  chat: AIClient
  RUO: AIClient
  adjustment: AIClient
  TTS: AIClient
}
