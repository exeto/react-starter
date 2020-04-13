import { createSlice } from '@reduxjs/toolkit';

import { NAMESPACE } from './consts';
import adapter from './adapter';
import { findPost, findPosts } from './thunks';

export default createSlice({
  name: NAMESPACE,
  initialState: adapter.getInitialState(),
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(findPost.fulfilled, adapter.addOne);
    builder.addCase(findPosts.fulfilled, adapter.addMany);
  },
});
