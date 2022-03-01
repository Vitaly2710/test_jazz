import { createSlice } from '@reduxjs/toolkit'
// Начальное значение
const initialState = {
  value: '',
  state: 'complete' | 'waiting' | 'rejected',
  username: 'Admin',
  password: '123456789',
  counter: 4,
  events: [
    {
      id: 1,
      title: 'Встреча в 12 часов',
      start: '2021-06-14',
      end: '2021-06-14'
    },
    {
      id: 3,
      title: 'Переговоры по изменению плана',
      start: '2022-02-17',
      end: '2022-02-17'
    },
    {
      id: 2,
      title: 'event',
      start: '2022-02-17',
      end: '2022-02-17'
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
    addedEvent: (state, action) => {
      state.events = [...state.events, action.payload]
    },

    incrementByAmount: (state, action) => {
      state.value += action.payload
    }
  }
})

export const { correctUser, addedEvent, incrementByAmount } = userSlice.actions

export default userSlice.reducer
