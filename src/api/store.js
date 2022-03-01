import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../reduxToolkit/slice'

export default configureStore({
  reducer: {
    counter: userReducer
  }
})
