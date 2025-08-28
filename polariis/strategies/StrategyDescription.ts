import { getPageSourceCode } from 'pxn/lib/page'
import { ActionScrenshot } from 'pxn/actions/ActionScrenshot'
import { ActionGetDescription } from 'pxn/actions/ActionGetDescription'
import { playAudioFromBlob } from 'pxn/lib/audio'
import { InterfaceStrategy } from 'pxn/strategies/InterfaceStrategy'
import { CookieManager } from 'pxn/core/CookieManager'

export class StrategyDescription implements InterfaceStrategy {
  async execute(requirement: string): Promise<void> {
    console.log('Executing description strategy')
    const cookieManager = CookieManager.getInstance()
    const reading_speed = cookieManager.getCookie('POLARIIS_READING_SPEED')
    const pageSourceCode = await getPageSourceCode()
    console.log('Getting page screeshot...')
    const pageScreenshot = await ActionScrenshot(window.location.href)
    console.log('Page screeshot ok')
    console.log({
      pageScreenshot,
    })
    console.log('Getting page description string...')
    const description = await ActionGetDescription({
      requirement,
      screenshot: pageScreenshot!,
      sourceCode: pageSourceCode,
      reading_speed: reading_speed!,
    })
    console.log('Playing audio...')
    await playAudioFromBlob(description)
    console.log('Audio played.')
  }
}
