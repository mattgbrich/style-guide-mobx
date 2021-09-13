import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  formContainer: {
    width: '40%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end'
  },
  submitBtn: {
    marginTop: theme.spacing(3)
  }
}));
