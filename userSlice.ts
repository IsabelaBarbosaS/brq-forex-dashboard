import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  name: string;
  lastName: string;
  email: string;
  country: string;
}

const initialState: UserState = {
  name: '',
  lastName: '',
  email: '',
  country: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUser(state, action: PayloadAction<UserState>) {
      return { ...action.payload };
    },
  },
});

export const { updateUser } = userSlice.actions;
export default userSlice.reducer;