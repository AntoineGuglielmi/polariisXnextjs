export function match<T extends string | number, R>(
  value: T,
  patterns: Record<T, R>,
): R {
  if (value in patterns) {
    return patterns[value]
  }
  throw new Error(`No match found for value: ${value}`)
}
