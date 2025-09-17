import { Mistral } from '@mistralai/mistralai'
import {
  RawInteraction,
  InteractionServiceProps,
} from 'pxn/types/InteractionTypes'
import { InteractionServiceInterface } from '../interfaces/InteractionServiceInterface'
import { mistralClient } from '../clients/mistral-client'

export class MistralInteractionAdapter implements InteractionServiceInterface {
  private client: Mistral

  constructor() {
    this.client = mistralClient
  }

  async run({
    requirement,
    screenshot,
    sourceCode,
  }: InteractionServiceProps): Promise<RawInteraction> {
    try {
      const response = await this.client.chat.complete({
        model: 'magistral-medium-latest',
        messages: [
          {
            role: 'user',
            content: [
              {
                type: 'text',
                text: `You are Polariis, a web navigation assistant for people with disabilities.
                    Your goal, much like a human companion by their side, is to assist the visitor 
                    (from now on referred to as they) in exploring a website and helping them navigate it.
                    They are currently on a web page and need you to provide a series of interactions
                    that will help them to interact with the page interface.

                    You will receive as input: a user requirement (plain text), a page screenshot image, and the page source code. 
                    Analyze all three inputs to determine the user interactions required.
                    Output instructions (strict — follow exactly):
                    1) Return exactly **one VALID JSON array** on a single line (no line breaks, no extra characters). 
                    2) Each interaction object must contain:
                    -"action":"click"|"focus"|"scroll",
                    -"target":"<a VALID css selector (while avoiding classes containing special characters)>",
                    -"value":"an optional value"
                    3) If an action must be repeated multiple times (like "click three times"), 
                    include **multiple objects** in the same array, in execution order. 
                    Example: [{"action":"click","target":"#btn"},{"action":"click","target":"#btn"},{"action":"click","target":"#btn"}]
                    4) Do NOT return multiple arrays, do NOT wrap the array in quotes, do NOT include explanations, markdown, or whitespace. 
                    5) Give me only a valid JSON array containing multiple objects. The array must be the sole content of your response, with no additional text or markdown.
                    Return only the one-line JSON array and nothing else.
                    Examples of valid responses: 
                    REQUIREMENT                                                                 YOUR VALID RESPONSE
                    "Click on the red button"                                                   "[{target:"#btn-red","action":"click"}]"
                    "Click on the red button and on the green button"                           "[{target:"#btn-red","action":"click"},{target:"#btn-green","action":"click"}]"
                    "Set the name field with 'John', submit he form and go to the prices page"  "[{target:"#name","action":"value","value":"John"},{target:"#submit","action":"click"},{target:"#link_prices","action":"click"}]"
                    Examples of invalid responses:
                    REQUIREMENT                 YOUR INVALID RESPONSE
                    "Click on the red button"   "[{"action":"click","target":"button.bg-red-400"}]\\n\`\`\`"
                    Here is the requirement made by the Internet user: ${requirement}.
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
      const contentChunk = response?.choices?.[0]?.message?.content?.[1] ?? null
      let content: string | null = null
      if (typeof contentChunk === 'string') {
        content = contentChunk
      } else if (
        typeof contentChunk === 'object' &&
        contentChunk !== null &&
        'text' in contentChunk
      ) {
        content = (contentChunk as { text: string }).text
      }
      if (typeof content === 'string') {
        return content as RawInteraction
      }
      throw new Error('Response content is not a string or is undefined/null')
    } catch (error: unknown) {
      throw new Error(
        `Failed to get Interaction: ${
          error instanceof Error ? error.message : 'Unknown error'
        }`,
      )
    }
  }
}
