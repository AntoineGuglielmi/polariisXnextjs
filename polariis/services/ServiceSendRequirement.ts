import { mistralClient } from './clients/mistral-client'

export const ServiceSendRequirement = async (
  requirementBase64: File,
): Promise<string | void> => {
  try {
    const { text } = await mistralClient.audio.transcriptions.complete({
      model: 'voxtral-mini-latest',
      file: {
        fileName: 'requirement.wav',
        content: requirementBase64,
      },
    })
    return text
  } catch (error: unknown) {
    console.log({
      error,
    })
  }
}
