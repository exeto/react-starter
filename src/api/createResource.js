import axios from 'axios';

import config from '@/config';

const createResource = name => {
  const url = `${config.apiUrl}/${name}`;

  return {
    find() {
      return axios.get(url).then(res => res.data);
    },
  };
};

export default createResource;
