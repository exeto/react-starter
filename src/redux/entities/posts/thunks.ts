import { createAsyncThunk } from '@reduxjs/toolkit';
import { markAsNotFound } from '@routo/redux';

import { createActionName } from './utils';
import api from './api';

export const findPosts = createAsyncThunk(
  createActionName('findPosts'),
  api.find,
);

export const findPost = createAsyncThunk(
  createActionName('findPost'),
  async (id: string, { dispatch }) => {
    try {
      return await api.findRecord(id);
    } catch (err) {
      if (err.response?.status === 404) {
        dispatch(markAsNotFound());
      }

      throw err;
    }
  },
);
