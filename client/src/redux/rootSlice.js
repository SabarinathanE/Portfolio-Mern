import { createSlice } from "@reduxjs/toolkit";

const rootSlice = createSlice({
  name: "root",
  initialState: {
    loading: false,
    reloadData: false,
  },
  reducers: {
    ShowLoading: (state, action) => {
      state.loading = true;
    },
    HideLoading: (state, action) => {
      state.loading = false;
    },
    ReloadData: (state, action) => {
      state.reloadData = action.payload;
    }
  },
});

export default rootSlice.reducer;
export const { ShowLoading, HideLoading, ReloadData} =
  rootSlice.actions;