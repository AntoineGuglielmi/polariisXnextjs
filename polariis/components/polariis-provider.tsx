'use client'

import { actionSendRequirement } from 'pxn/actions/actionSendRequirement'
import { audioFileFromBlob, smartRecord } from 'pxn/lib/audio'
import { useEffect, useState } from 'react'

type PolariisProviderProps = {
  children?: React.ReactNode
}

export default function PolariisProvider({ children }: PolariisProviderProps) {
  const [listening, setListening] = useState(false)
  const silenceLimit = 50000

  const triggerPolariis = async () => {
    setListening(true)
  }

  useEffect(() => {
    const runLoop = async () => {
      let attempts = 0

      while (listening) {
        if (attempts >= 3) {
          console.warn('Stopping polariis after 3 attempts.')
          setListening(false)
          break
        }

        attempts++
        const inputBlob = await smartRecord()

        if (inputBlob.size < silenceLimit) {
          console.warn(
            `Blob size: ${inputBlob.size} < ${silenceLimit} - No real sound was recorded. Recording resumes.`,
          )
          continue
        }

        console.log('Recording ok, sending to AI...')
        const audioFile = await audioFileFromBlob({ blob: inputBlob })
        const test = await actionSendRequirement(audioFile)
        console.info({
          test,
        })

        await new Promise((resolve) => setTimeout(resolve, 3000))
      }
    }

    if (listening) {
      runLoop()
    }
  }, [listening])

  return (
    <>
      <button
        className="flex items-center justify-center h-12 w-12 rounded-full bg-[#21242A] text-[#DEDBD5] fixed top-4 -left-[9999px] focus:left-4"
        tabIndex={0}
        onClick={triggerPolariis}
      >
        ii
      </button>
      {children}
    </>
  )
}
