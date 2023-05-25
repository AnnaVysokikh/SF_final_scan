import { createSlice } from '@reduxjs/toolkit'

export const sizeScreen = createSlice({
  name: 'sizeScreen',
  initialState: {
    width: window.innerWidth
  },
  reducers: {
    setScreenWidth: (state, action) => {
      state.width = action.payload
    }
  }
})

export const {setScreenWidth} = sizeScreen.actions

export default sizeScreen.reducer