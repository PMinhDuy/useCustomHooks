import { SetStateAction, useCallback, useState } from 'react'

export function useStickyState<T>(defaultValue: T, key: string) {
  const [value, setValue] = useState(() => {
    const stickyValue = window.localStorage.getItem(key)
    return stickyValue !== null ? JSON.parse(stickyValue) : defaultValue
  })

  const changeState = useCallback(
    (state: SetStateAction<T>) => {
      setValue((prevState: T) => {
        const newValue = state instanceof Function ? state(prevState) : state
        window.localStorage.setItem(key, JSON.stringify(newValue))
        return newValue
      })
    },
    [key]
  )

  return [value, changeState]
}
