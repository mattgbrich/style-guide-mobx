import React from 'react';
import { observer } from 'mobx-react';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useStore } from '../../../store';
import useStyles from './styles';

function NewUser () {
  const { usersStore, navStore } = useStore();
  const { state: { newUser } } = usersStore;
  const classes = useStyles();

  const handleChange = field => e => {
    usersStore.updateNewUser(field, e.target.value);
  };

  const handleSubmit = () => usersStore.addUser();

  const handleCancel = () => {
    usersStore.clearNewUser();
    navStore.navigate('users', navStore.usersViews.list);
  };
  
  return (
    <>
    <Typography variant="h4">New User</Typography>
    <div className={classes.formContainer}>
      <TextField value={newUser.name} onChange={handleChange('name')} label="Name" fullWidth />
      <TextField value={newUser.age} onChange={handleChange('age')} label="Age" fullWidth />
      <TextField value={newUser.job} onChange={handleChange('job')} label="Job" fullWidth />
      <Button 
        variant="contained" 
        color="primary" 
        onClick={handleSubmit} 
        className={classes.submitBtn}
      >
        submit
      </Button>
      <Button
        variant="outlined"
        color="secondary"
        onClick={handleCancel}
      >
        cancel
      </Button>
    </div>
    </>
  );
}

export default observer(NewUser);
