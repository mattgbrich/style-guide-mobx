import React from 'react';
import { observer } from 'mobx-react';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import Button from '@material-ui/core/Button';
import UsersListItem from './UsersListItem';
import { useStore } from '../../../store';
import useStyles from './styles';

function UsersList () {
  const { usersStore, navStore } = useStore();
  const classes = useStyles();

  const handleNewUserClick = () => navStore.navigate('users', navStore.usersViews.new);

  const handleListItemClick = (user) => () => {
    usersStore.selectUser(user);
    navStore.navigate('users', navStore.usersViews.details);
  }

  return (
    <>
      <Typography variant="h4">Users List</Typography>
      <Button variant="contained" color="primary" onClick={handleNewUserClick}>new user</Button>
      <List className={classes.listContainer}>
        {usersStore.state.users.map(user => (
          <UsersListItem user={user} key={user.id} onClick={handleListItemClick} />
        ))}
      </List>
    </>
  );
}

export default observer(UsersList);
