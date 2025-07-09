import { cn } from '@/lib/utils'
import dynamic from 'next/dynamic'
import React from 'react'

type ListProps<T> = {
  className?: string
  items?: T[]
  itemComponent?: React.ComponentType<T>
  itemComponentFromKey?: string
  componentPath?: string
}

export default function List<T>({
  className,
  items,
  itemComponent,
  itemComponentFromKey,
  componentPath,
}: ListProps<T>) {
  return (
    <ul className={cn('List', className)}>
      {items?.map((item, index) => {
        const ItemComponent =
          itemComponent ??
          dynamic(
            () =>
              import(
                `@/components/${componentPath}/${
                  typeof item === 'string'
                    ? item
                    : itemComponentFromKey
                    ? (item as Record<string, unknown>)[itemComponentFromKey]
                    : ''
                }`
              ),
          )
        return (
          <li
            key={index}
            className="List__item"
          >
            {ItemComponent ? (
              <ItemComponent
                {...(item as T)}
                index={index}
              />
            ) : (
              String(item)
            )}
          </li>
        )
      })}
    </ul>
  )
}
