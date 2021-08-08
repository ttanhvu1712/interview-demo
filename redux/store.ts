
import logger from 'redux-logger'
import { configureStore } from '@reduxjs/toolkit'
import tableReducer, { SliceState } from '../domains/table/slices'

export interface CommonState<DataSource> {
  loading: boolean
  data: DataSource[]
  error: unknown
}

export interface RootState {
  table: SliceState
}

const store = configureStore({
  reducer: {
    table: tableReducer,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(logger)
  },
})

export default store
