import React, { FC } from 'react';
import { NOT_FOUND } from '@routo/core';
import { useRouterState } from '@routo/react';

import { LIST, ITEM } from 'src/router/ids';
import List from 'src/pages/List';
import Item from 'src/pages/Item';
import NotFound from 'src/pages/NotFound';
import Base from 'src/components/Base';

type Mapping = { [id: string]: FC };

const mapping: Mapping = {
  [LIST]: List,
  [ITEM]: Item,
  [NOT_FOUND]: NotFound,
};

const Router: FC = () => {
  const { id } = useRouterState();
  const Component = mapping[id];

  return (
    <Base>
      <Component />
    </Base>
  );
};

export default Router;
