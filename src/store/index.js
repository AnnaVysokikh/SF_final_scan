import { configureStore } from '@reduxjs/toolkit'
import profileSlice from './profile'
import sizeScreenSlice from './sizeScreen'
import histograms  from './histograms'

export default configureStore({
  reducer: {
    profile: profileSlice,
    sizeScreen: sizeScreenSlice,
    histograms,
  }
})