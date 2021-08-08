import React, { useState, useEffect, ChangeEvent, FocusEvent } from 'react'
import { Input } from 'antd'

interface InputFieldProps {
  value: string
  fieldName: string
  recordId: string
  onChange: (field: string, value: string, id: string) => void
}

const InputField: React.FC<InputFieldProps> = ({ value: initValue, fieldName, recordId, onChange }) => {
  const [value, setValue] = useState<string>('')

  useEffect(() => {
    setValue(initValue)
  }, [initValue])

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  const onBlurHandler = (e: FocusEvent<HTMLInputElement>) => {
    onChange(fieldName, e.target.value, recordId)
  }

  return <Input value={value} onChange={onChangeHandler} onBlur={onBlurHandler} />
}

export default InputField
