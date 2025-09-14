type AIClient = 'mistral' | 'openai'

export interface AIConfig {
  transcription: AIClient
  vision: AIClient
  chat: AIClient
}
