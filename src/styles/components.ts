/**
 *  MUI theme components.
 * */

import palette from './palette';

const components = {
  MuiAppBar: {
    styleOverrides: {
      root: {
        boxShadow: 'none',
        borderBottom: `1px solid ${palette.common.black}`,
      },
    },
  },
};

export default components;
