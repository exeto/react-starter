import React from 'react';
import { NOT_FOUND } from '@routo/core';
import { useRouterState } from '@routo/react';

import { LIST, ITEM } from '/router/types';
import List from '/pages/List';
import Item from '/pages/Item';
import NotFound from '/pages/NotFound';
import Base from '/components/Base';

const mapping = {
  [LIST]: List,
  [ITEM]: Item,
  [NOT_FOUND]: NotFound,
};

const Router = () => {
  const { id } = useRouterState();
  const Component = mapping[id];

  return (
    <Base>
      <Component />
    </Base>
  );
};

export default Router;
