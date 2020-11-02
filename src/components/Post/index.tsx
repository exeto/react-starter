import React, { memo, FC } from 'react';
import { Link } from '@routo/link';

import { ITEM } from 'src/router/ids';
import { useStyles } from './styles';

type Props = {
  data: {
    id: number;
    title: string;
    body: string;
  };
};

const Post: FC<Props> = ({ data }) => {
  const classes = useStyles();

  return (
    <article className={classes.wrapper}>
      <h2>
        <Link
          to={ITEM}
          params={{ id: String(data.id) }}
          className={classes.link}
        >
          {data.title}
        </Link>
      </h2>

      <p>{data.body}</p>
    </article>
  );
};

export default memo(Post);
