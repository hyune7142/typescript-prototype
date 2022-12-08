import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';


// State Type
interface State {
  user: string,
}

// initial State
const initialState: State = {
  user: 'Test',
}

// Slice
const routeSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUrl(state, action: PayloadAction<string>) {
      state.user = action.payload
    }
  }
})

export default routeSlice.reducer
export const { setUrl } = routeSlice.actions;

