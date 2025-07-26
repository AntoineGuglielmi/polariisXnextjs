'use client'

type PolariisProviderProps = {
  children?: React.ReactNode
}

export default function PolariisProvider({ children }: PolariisProviderProps) {
  return (
    <>
      PolariisProvider
      {children}
    </>
  )
}
