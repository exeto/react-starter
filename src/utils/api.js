import axios from 'axios';

import config from '/config';

export const createApi = name => {
  const url = `${config.apiUrl}/${name}`;

  return Object.freeze({
    find() {
      return axios.get(url).then(res => res.data);
    },

    findRecord(id) {
      return axios.get(`${url}/${id}`).then(res => res.data);
    },
  });
};
