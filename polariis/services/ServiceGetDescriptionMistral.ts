import { Mistral } from '@mistralai/mistralai'
import { mistralClient } from './clients/mistral-client'

export class ServiceGetDescriptionMistral {
  private client: Mistral

  constructor() {
    this.client = mistralClient
  }

  async describe({
    requirement,
    screenshot,
    sourceCode,
  }: {
    requirement: string
    screenshot: string
    sourceCode: string
  }): Promise<string> {
    try {
      const response = await this.client.chat.complete({
        model: 'pixtral-12b',
        messages: [
          {
            role: 'user',
            content: [
              {
                type: 'text',
                text: `You are Rispol, a web navigation assistant for people with disabilities.
                    Your goal, much like a human companion by their side, is to assist the visitor 
                    (from now on referred to as they) in exploring a website and helping them navigate it.
                    They are currently on a web page and need you to provide a description of that page.
                    You will receive as input:
                    the need expressed by them,
                    an image representing a screenshot of the page,
                    and the source code of the page.
                    You must analyze and cross-check these three elements to best meet their needs.
                    Once your analysis is complete, you must return your response as a single object, 
                    containing a "description" property whose value is the string containing your description 
                    in the same language used for the requirement.
                    Your response must strictly be limited to a single JSON object on one line, exactly in the format:
                    {"description": "<string>"}
                    Do not add any commentary, explanation, formatting, backticks, or line breaks.
                    Return only the raw JSON object, with no additional characters whatsoever.
                    Failure to follow this format will be considered an invalid response.
                    Here is the need made by the Internet user: ${requirement}.
                    Screenshot are given aside.`,
              },
              {
                type: 'text',
                text: `Here is the source code: ${sourceCode}`,
              },
              {
                type: 'image_url',
                imageUrl: {
                  url: screenshot,
                },
              },
            ],
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
