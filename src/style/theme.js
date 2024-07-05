import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import buttonStyles from './button';

const theme = createTheme({
  palette: {
    primary: {
        main: '#1E0A3C',
    },
    secondary: {
        main: '#3D64FF',
    },
    customWhite: {
        main: '#fff',
    },
  },
  components: {
    ...buttonStyles,
    MuiCssBaseline: {
      styleOverrides: {
        '*': {
          margin: 0,
          padding: 0,
        },
      },
    },
    MuiTypography: {
        defaultProps: {
          variantMapping: {
            h1: 'h2',
            h2: 'h2',
            h3: 'h2',
            h4: 'h2',
            h5: 'h2',
            h6: 'h2',
            subtitle1: 'h2',
            subtitle2: 'h2',
            body1: 'span',
            body2: 'span',
          },
        },
    },
   }
});

export default theme;
