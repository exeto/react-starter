import axios from 'axios';

import config from 'src/config';

export const createApi = <T>(name: string) => {
  const url = `${config.apiUrl}/${name}`;

  return Object.freeze({
    find(): Promise<T[]> {
      return axios.get(url).then((res) => res.data);
    },

    findRecord(id: string): Promise<T> {
      return axios.get(`${url}/${id}`).then((res) => res.data);
    },
  });
};
