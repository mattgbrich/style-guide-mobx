import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  tabsRoot: {
    width: '100%'
  },
  container: {
    marginTop: theme.spacing(3),
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    width: '80%'
  },
  paper: {
    height: 600,
    padding: theme.spacing(2)
  }
}));
