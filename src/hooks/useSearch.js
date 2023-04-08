import { useEffect, useState, useRef } from 'react'

export function useSearch() {
  const [search, updateSearch] = useState('')
  const [error, setError] = useState(null)
  const isFirstInput = useRef(true)

  useEffect(() => {
    // Para que no haga las validaciones si es la primera vez que vamos a escribir
    if (isFirstInput.current) {
      isFirstInput.current = search === ''
      return
    }

    if (search === '') {
      setError('No hay película que buscar')
      return
    }

    if (search.match(/^\d+$/)) {
      setError('No puedes buscar por número')
      return
    }

    if (search.length < 3) {
      setError('Por favor, introduzca al menos 3 caracteres')
      return
    }

    setError(null)
  }, [search])

  return { search, updateSearch, error }
}
