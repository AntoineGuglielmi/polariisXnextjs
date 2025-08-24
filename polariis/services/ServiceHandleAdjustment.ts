import { Mistral } from '@mistralai/mistralai'
import { mistralClient } from './clients/mistral-client'

export class ServiceHandleAdjustment {
  private client: Mistral

  constructor() {
    this.client = mistralClient
  }

  public async handleAdjustment({
    requirementTranscription,
    readingSpeed,
  }: {
    requirementTranscription: string
    readingSpeed: string
  }): Promise<string> {
    try {
      const response = await this.client.chat.complete({
        model: 'mistral-large-latest',
        messages: [
          {
            role: 'user',
            content: `You are Polariis, a web navigation assistant for people with disabilities.
                    Your goal, in the manner of a human guiding them,
                    is to assist the visitor (referred to as "they") of a website and help them navigate it.
                    They are currently on a webpage and want to communicate with you,
                    either to provide information or to adjust certain settings
                    to personalize their experience.
                    You will receive as input:
                    - the request from they,
                    - the currently set reading speed.
                    You must analyze and cross-reference all these elements to best respond to their needs.
                    Once your analysis is complete, you must return your response as a single object,
                    containing the following properties:
                    - "reading_speed" containing a string for the potentially updated reading speed (maximum 1.2, minimum 0.7),
                    - "feedback" containing a string with a message validating your analysis and any updates.
                    Your response must be strictly limited to a single JSON object on one line,
                    exactly in the form: {"<property>": "<string>"}.
                    Do not add any comments, explanations, formatting, backticks, or line breaks.
                    Return only the raw JSON object, without any extra characters.
              Here is the need made by they: ${requirementTranscription}.
              Here is the current reading speed: ${readingSpeed}.`,
          },
        ],
      })
      const content = response.choices[0].message.content
      if (typeof content === 'string') {
        return content
      }
      throw new Error('Response content is not a string')
    } catch (error: unknown) {
      throw new Error(
        `Failed to handle adjustment: ${
          error instanceof Error ? error.message : 'Unknown error'
        }`,
      )
    }
  }
}
