import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  users: [],
  error: ''
};

export const getUserListThunk = createAsyncThunk('user/fetchAllUsersList', async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');

  if(!response.ok) {
    return Promise.reject();
  }

  return await response.json();
})

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    deleteUsers: (state, { payload }) => {
      state.users = state.users.filter((item) => item.id !== payload);
    },
  },
  extraReducers: builder => {
    builder.addCase(getUserListThunk.pending, state => {
      state.loading = true
    })
    builder.addCase(getUserListThunk.fulfilled, (state, action) => {
      state.loading = false
      state.users = action.payload
      state.error = ''
    })
    builder.addCase(getUserListThunk.rejected, (state, action) => {
      state.loading = false
      state.users = []
      state.error = 'Unable to fetch data due to api fail'
    })
  }
});

export const { deleteUsers } = userSlice.actions;
export default userSlice.reducer;
