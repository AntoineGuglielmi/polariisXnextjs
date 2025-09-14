import { getPageSourceCode } from 'pxn/lib/page'
import { playAudioFromBlob } from 'pxn/lib/audio'
import { CookieManager } from 'pxn/core/CookieManager'
import { ReadingSpeed } from 'pxn/types/OtherTypes'
import { InterfaceStrategy } from 'pxn/strategies/InterfaceStrategy'
import { ActionDescription } from 'pxn/actions/ActionDescription'
import { ActionScreenshot } from 'pxn/actions/ActionScreenshot'

export class StrategyDescription implements InterfaceStrategy {
  async execute(requirement: string): Promise<void> {
    console.log('Executing description strategy')
    // Getting cookies
    const cookieManager = CookieManager.getInstance()
    const readingSpeed = cookieManager.getCookie(
      'POLARIIS_READING_SPEED',
    ) as ReadingSpeed

    // Prepare data to send to ActionGetDescription
    const sourceCode = await getPageSourceCode()
    console.log('Getting page screeshot...')
    const screenshot = await ActionScreenshot(window.location.href)
    console.log('Page screeshot ok')

    // Get description from ActionGetDescription
    console.log('Getting page description string...')
    const description = await ActionDescription({
      requirement,
      screenshot,
      sourceCode,
      readingSpeed,
    })
    // console.log('Playing audio...')
    await playAudioFromBlob(description)
    // console.log('Audio played.')
  }
}
