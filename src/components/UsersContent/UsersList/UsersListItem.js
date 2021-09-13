import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

function UsersListItem ({ user, onClick }) {
  return (
    <ListItem onClick={onClick(user)}>
      <ListItemText primary={`Name: ${user.name}`} />
    </ListItem>
  );
}

export default UsersListItem;
