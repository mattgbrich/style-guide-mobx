import React from 'react';
import { observer } from 'mobx-react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { useStore } from '../../../store';

function UserDetails () {
  const store = useStore();

  const handleClick = () => store.navStore.navigate('users', store.navStore.usersViews.list);

  return (
    <>
      <Typography variant="h4">User Details</Typography>
      <Typography variant="body1">Name: {store.usersStore.state.selected.name}</Typography>
      <Typography variant="body1">Age: {store.usersStore.state.selected.age}</Typography>
      <Typography variant="body1">Job: {store.usersStore.state.selected.job}</Typography>
      <Button variant="contained" color="primary" onClick={handleClick}>go back</Button>
    </>
  );
}

export default observer(UserDetails);
