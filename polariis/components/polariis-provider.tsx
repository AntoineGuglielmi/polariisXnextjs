'use client'

type PolariisProviderProps = {
  children?: React.ReactNode
}

export default function PolariisProvider({ children }: PolariisProviderProps) {
  const triggerPolariis = async () => {
    console.log('Polariis triggered')
  }

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
