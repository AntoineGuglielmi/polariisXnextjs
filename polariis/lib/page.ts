import { PageSourceCode } from 'pxn/types/OtherTypes'

export const getPageSourceCode = async (): Promise<PageSourceCode> => {
  console.log('Getting page source code...')

  try {
    const bodyClone = document.body.cloneNode(true) as HTMLElement
    bodyClone.querySelectorAll('script, style').forEach((el) => el.remove())
    const sourceCode = bodyClone.innerHTML
    console.log('Page source code ok')
    return sourceCode
  } catch (error: unknown) {
    throw new Error(
      `Failed to fetch page source code: ${
        error instanceof Error ? error.message : 'Unknown error'
      }`,
    )
  }
}
