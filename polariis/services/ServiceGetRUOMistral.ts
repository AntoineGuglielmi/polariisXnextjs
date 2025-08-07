import { Mistral } from '@mistralai/mistralai'
import { mistralClient } from './clients/mistral-client'

export class ServiceGetRUOMistral {
  private client: Mistral

  constructor() {
    this.client = mistralClient
  }

  async getRUO(requirement: string): Promise<string> {
    try {
      const response = await this.client.chat.complete({
        model: 'mistral-large-latest',
        messages: [
          {
            role: 'user',
            content: `You are Rispol, a web navigation assistant for people with disabilities. Your goal, much like a human companion by their side, is to assist the visitor (from now on referred to as they) in navigating a website, by providing descriptions, performing interactions with the page on their behalf, or simply taking into account what they communicate to you — for example, to adjust certain settings.
              To do this, you will receive as input the need expressed by them, and you must analyze it to determine whether they require:
              a description of the page currently displayed on their screen,
              an interaction with the page (such as clicks, scrolling, focus — anything a human could do on a web page),
              or an adjustment of settings (such as reading speed, for example).
              Once your analysis is complete, you must return your response as a single object, containing a "type" property that must take one of the following values: "description", "interaction", or "adjustment".
              Your response must consist of nothing but a single JSON object on one line, in this exact format: {"type": "<value>"}. Do not add any commentary, explanation, formatting, backticks, or line breaks. Return only the raw JSON object. Absolutely no extra characters.
              Here is the need made by the Internet user: ${requirement}`,
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
        `Failed to get RUO: ${
          error instanceof Error ? error.message : 'Unknown error'
        }`,
      )
    }
  }
}
