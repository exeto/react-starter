import React from 'react';
import { NOT_FOUND } from '@routo/core';

import * as types from '/redux/router/types';
import List from '/pages/List';
import Item from '/pages/Item';
import NotFound from '/pages/NotFound';
import Base from '/components/Base';
import { useType } from './hooks';

const mapping = {
  [types.LIST]: List,
  [types.ITEM]: Item,
  [NOT_FOUND]: NotFound,
};

const Router = () => {
  const type = useType();
  const Component = mapping[type];

  return (
    <Base>
      <Component />
    </Base>
  );
};

export default Router;
