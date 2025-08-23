export const getPageSourceCode = async (): Promise<string> => {
  console.log('Getting page source code...')

  try {
    const bodyClone = document.body.cloneNode(true) as HTMLElement
    bodyClone.querySelectorAll('script, style').forEach((el) => el.remove())
    const sourceCode = bodyClone.innerHTML
    return sourceCode
  } catch (error: unknown) {
    throw new Error(
      `Failed to fetch page source code: ${
        error instanceof Error ? error.message : 'Unknown error'
      }`,
    )
  }
}
