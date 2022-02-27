import { createSlice } from '@reduxjs/toolkit'
// Начальное значение
const initialState = {
  value: '',
  state: 'complete' | 'waiting' | 'rejected',
  username: 'Admin',
  password: '123456789',
  events: [
    {
      id: 1,
      title: 'event 1',
      start: '2021-06-14T10:00:00',
      end: '2021-06-14T12:00:00'
    },
    {
      id: 2,
      title: 'event 2',
      start: '2021-06-16T13:00:00',
      end: '2021-06-16T18:00:00'

    },
    {
      id: 3,
      title: 'event 3',
      start: '2022-02-17',
      end: '2022-02-17',
      extendedProps: {
        department: 'BioChemistry'
      },
      description: 'Lecture'
    }
  ]
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
