import { ActionInteractions } from 'pxn/actions/ActionInteractions'
import { ActionScreenshot } from 'pxn/actions/ActionScreenshot'
import { getPageSourceCode } from 'pxn/lib/page'
import { InterfaceStrategy } from 'pxn/strategies/InterfaceStrategy'

export class StrategyInteraction implements InterfaceStrategy {
  async execute(requirement: string): Promise<void> {
    // Prepare data to send to ActionGetDescription
    const sourceCode = await getPageSourceCode()
    console.log('Getting page screeshot...')
    const screenshot = await ActionScreenshot(window.location.href)
    console.log('Page screeshot ok')
    const interactions = await ActionInteractions({
      requirement,
      screenshot,
      sourceCode,
    })
    console.log({
      interactions,
    })
    interactions.map(({ target, action, value }) => {
      const targetDOM = document.querySelector(target)
      if (!targetDOM) {
        throw new Error(
          `Polariis has not been able to determine the target of the requested interaction.`,
        )
      }
      switch (action) {
        case 'click':
        case 'focus':
          ;(targetDOM as HTMLElement)[action]()
          break
        case 'value':
          ;(targetDOM as HTMLInputElement | HTMLTextAreaElement).value =
            value ?? ''
          break
        default:
          throw new Error(
            `Polariis is not yet able to manage the requested interaction: ${action}.`,
          )
      }
    })
  }
}
