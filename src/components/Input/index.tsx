import React, { useCallback } from 'react'
import { Input as InputAntD } from 'antd';
import useInput from '../../hooks/useInput';

function Input({ fieldName, ...props }: any) {
  const { value, onChange } = useInput(fieldName)

  const memonizedChange = useCallback(onChange , [value])
  //console.log('INPUT HOOK OF', fieldName, value)

  return <InputAntD value={value} onChange={memonizedChange} {...props} />
}

export default React.memo(Input)