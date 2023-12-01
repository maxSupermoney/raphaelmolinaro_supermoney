import { useState, ChangeEvent, useCallback } from 'react'

const useInput = ({ key = '' }) => {
  const [ inputs, setInputs ] = useState('')

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setInputs(value)
  }

  return { value: inputs, onChange }
}

export default useInput