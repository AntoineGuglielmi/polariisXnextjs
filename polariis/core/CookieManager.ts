export class CookieManager {
  private static instance: CookieManager

  private constructor() {}

  static getInstance(): CookieManager {
    if (!CookieManager.instance) {
      CookieManager.instance = new CookieManager()
    }
    return CookieManager.instance
  }

  setCookie({
    name,
    value,
    days = 7,
  }: {
    name: string
    value: string
    days?: number
  }) {
    const expires = new Date(Date.now() + days * 864e5).toUTCString()
    document.cookie = `${name}=${encodeURIComponent(
      value,
    )}; expires=${expires}; path=/`
  }

  getCookie(name: string): string | null {
    const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'))
    return match ? decodeURIComponent(match[2]) : null
  }

  deleteCookie(name: string) {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`
  }

  hasCookie(name: string): boolean {
    return document.cookie
      .split(';')
      .some((c) => c.trim().startsWith(name + '='))
  }
}
