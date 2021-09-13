import { createTheme } from '@material-ui/core/styles';
import palette from './palette';

export default createTheme({
  typography: {
    fontFamily: [
      'open-sans',
      'sans-serif'
    ].join(', ')
  },
  palette: {
    primary: {
      main: palette.primary
    },
    secondary: {
      main: palette.secondary
    },
    black: palette.black,
    white: palette.white
  },
  overrides: {
    
  }
});
