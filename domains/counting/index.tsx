import React, { useState } from 'react'
import style from './style.module.scss'

const Countdown: React.FC = () => {
  const [counter, setCounter] = useState<number>(0)
  return (
    <div className={style.container}>
      <div className={style.value}>{`Countdown value: ${counter}`}</div>
      <button className={style.button} onClick={() => setCounter(counter + 1)}>{`Increase counter by 1`}</button>
      <button className={style.button} onClick={() => setCounter(0)}>{`Reset counter to 0`}</button>
    </div>
  )
}

export default Countdown
