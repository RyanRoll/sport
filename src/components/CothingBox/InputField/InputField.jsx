import React, { useCallback, useState } from 'react'

import styles from './styles/inputField.module.scss'

export const InputField = (props) => {
  const { title, defaultValue, onChange } = props
  const [value, setValue] = useState(defaultValue)
  const onChangeValue = useCallback(
    (event) => {
      const value = event.target.value
      setValue(value)
    },
    [setValue],
  )
  const onSubmitValue = useCallback(() => {
    onChange?.(value)
  }, [value, onChange])

  return (
    <div className={styles.inputField}>
      <h3>{title}</h3>
      <input className={styles.input} value={value} onChange={onChangeValue} />
      <button className={styles.button} onClick={onSubmitValue}>
        反映
      </button>
    </div>
  )
}

export default InputField
