'use client'
import { cn } from '@/lib/utils'

type TestProps = {
  className?: string
  children?: React.ReactNode
  color: 'red' | 'green'
}

export default function Test({ className, color }: TestProps) {
  const click = () => {
    console.log(`Clicked ${color} button`)
  }
  return (
    <button
      id="test"
      className={cn('Test bg-red-400 text-white', className)}
      {...(click ? { onClick: () => click() } : {})}
    >
      Test
    </button>
  )
}
