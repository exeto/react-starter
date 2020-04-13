import { createEntityAdapter } from '@reduxjs/toolkit';

import { Post } from './types';

export default createEntityAdapter<Post>();
