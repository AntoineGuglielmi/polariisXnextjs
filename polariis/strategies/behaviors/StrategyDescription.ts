import { getPageSourceCode } from 'pxn/lib/page'
import { ActionScrenshot } from 'pxn/actions/ActionScrenshot'
import { ActionGetDescription } from 'pxn/actions/ActionGetDescription'
import { playAudioFromBlob } from 'pxn/lib/audio'
import { CookieManager } from 'pxn/core/CookieManager'
import { ReadingSpeed } from 'pxn/types/OtherTypes'
import { InterfaceStrategy } from 'pxn/strategies/InterfaceStrategy'

export class StrategyDescription implements InterfaceStrategy {
  async execute(requirement: string): Promise<void> {
    console.log('Executing description strategy')
    // Getting cookies
    const cookieManager = CookieManager.getInstance()
    const reading_speed = cookieManager.getCookie(
      'POLARIIS_READING_SPEED',
    ) as ReadingSpeed

    // Prepare data to send to ActionGetDescription
    const sourceCode = await getPageSourceCode()
    console.log('Getting page screeshot...')
    const screenshot = await ActionScrenshot(window.location.href)
    console.log('Page screeshot ok')

    // Get description from ActionGetDescription
    console.log('Getting page description string...')
    const description = await ActionGetDescription({
      requirement,
      screenshot,
      sourceCode,
      reading_speed,
    })
    // console.log('Playing audio...')
    await playAudioFromBlob(description)
    // console.log('Audio played.')
  }
}
