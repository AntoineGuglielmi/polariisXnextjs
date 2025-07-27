'use client'

import { playAudioFromBlob, smartRecord } from 'pxn/lib/audio'
import { useEffect, useState } from 'react'

type PolariisProviderProps = {
  children?: React.ReactNode
}

export default function PolariisProvider({ children }: PolariisProviderProps) {
  const [listening, setListening] = useState(false)

  const triggerPolariis = async () => {
    setListening(true)
  }

  useEffect(() => {
    const runLoop = async () => {
      while (listening) {
        const inputBlob = await smartRecord()
        if (inputBlob.size < 100000) {
          console.warn('No real sound was recorded. Recording resumes.')
          continue
        }
        await playAudioFromBlob(inputBlob)
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
