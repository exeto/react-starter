import { posts } from '@/api';
import { findSuccess } from './actions';

export const find = () => dispatch =>
  posts.find().then(data => dispatch(findSuccess(data)));
