import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
  wrapper: {
    '&:not(:last-child)': {
      borderBottom: [1, 'dotted', '#ccc'],
      paddingBottom: 8,
    },
  },

  link: {
    textDecoration: 'none',
    color: '#333',

    '&:hover': {
      textDecoration: 'underline',
    },
  },
});
