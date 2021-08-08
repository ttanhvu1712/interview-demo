import { combineReducers, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { CommonState } from '../../redux/store'
import axios from '../../axios-settings'

export interface TableResponseData {
  [propName: string]: string,
  name: string
  position: string
  email: string
  id: string
}

const initialState = {
  loading: false,
  data: [],
  error: null,
} as CommonState<TableResponseData>

//getTableSlice
export const getTableData = createAsyncThunk('getTableData', async (params, { rejectWithValue }) => {
  try {
    const response = await axios({
      method: 'get',
      url: `/list-data/`,
      withCredentials: true,
    })
    return response['data']
  } catch (err) {
    return rejectWithValue(err.response.data)
  }
})

const getTableDataSlice = createSlice({
  name: 'getTableData',
  initialState: { ...initialState },
  reducers: {
    resetState: (state) => {
      state.loading = false
      state.data = []
      state.error = null
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getTableData.pending, (state) => {
      state.loading = true
    })

    builder.addCase(getTableData.fulfilled, (state, action) => {
      state.data = action.payload
      state.loading = false
    })

    builder.addCase(getTableData.rejected, (state, action) => {
      state.error = action.payload
      state.loading = false
    })
  },
})

const { actions: getTableDataAction, reducer: getTableDataReducer } = getTableDataSlice
export const { resetState: resetGetTableData } = getTableDataAction

const reducer = combineReducers({ getTableData: getTableDataReducer })
export default reducer

export interface SliceState {
  getTableData: CommonState<TableResponseData>
}
