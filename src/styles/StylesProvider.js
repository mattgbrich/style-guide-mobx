import { ThemeProvider } from '@material-ui/core/styles';
import muiTheme from './muiTheme';

function StylesProvider ({ children }) {
  return (
    <ThemeProvider theme={muiTheme}>
      {children}
    </ThemeProvider>
  );
}

export default StylesProvider;
