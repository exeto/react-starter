import { createApi } from 'src/utils/api';
import { Post } from './types';

export default createApi<Post>('posts');
