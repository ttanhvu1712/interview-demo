import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTableData } from './slices'
import { RootState } from '../../redux/store'
import style from './style.module.scss'

const Countdown: React.FC = () => {
  const dispatch = useDispatch()

  const { data, loading } = useSelector((state: RootState) => state.table.getTableData || {})
  const [counter, setCounter] = useState<number>(0)

  useEffect(() => {
    dispatch(getTableData())
  }, [])

  return (
    <div className={style.container}>
      <div className={style.value}>{`Countdown value: ${counter}`}</div>
      <button className={style.button} onClick={() => setCounter(counter + 1)}>{`Increase counter by 1`}</button>
      <button className={style.button} onClick={() => setCounter(0)}>{`Reset counter to 0`}</button>
    </div>
  )
}

export default Countdown
