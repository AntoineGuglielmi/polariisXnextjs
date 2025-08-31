import { CookieManager } from 'pxn/core/CookieManager'
import { ContextProcess } from 'pxn/strategies/process/ContextProcess'

export class Polariis {
  constructor() {
    this._initCookies()
  }

  public async listen() {
    const contextProcess = new ContextProcess()
    await contextProcess.run()
  }

  private _initCookies() {
    try {
      const cookieManager = CookieManager.getInstance()
      if (!cookieManager.hasCookie('POLARIIS_READING_SPEED')) {
        cookieManager.setCookie({
          name: 'POLARIIS_READING_SPEED',
          value: '1.0',
        })
      }
    } catch (error: unknown) {
      console.warn(
        `Skipping cookie initialization because server side: ${
          error instanceof Error ? error.message : String(error)
        }`,
      )
    }
  }
}
