import { createSlice } from '@reduxjs/toolkit'
// Начальное значение
const initialState = {
  value: '',
  state: 'complete' | 'waiting' | 'rejected',
  username: 'Admin',
  password: '123456789'
}

const userSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    correctUser: (state) => {
      state.value = 'Admin'
      state.state = 'complete'
    },
    decrement: (state) => {
      state.value -= 1
    },

    incrementByAmount: (state, action) => {
      state.value += action.payload
    }
  }
})

export const { correctUser, decrement, incrementByAmount } = userSlice.actions

export default userSlice.reducer
