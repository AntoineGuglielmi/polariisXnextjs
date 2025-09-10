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
    interactions.map(({ target, action }) => {
      const targetDOM = document.querySelector(target)
      if (action === 'click' && targetDOM) {
        ;(targetDOM as HTMLElement).click()
      }
    })
  }
}
