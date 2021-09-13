import React, { useEffect } from 'react';
import { observer } from 'mobx-react';
import { useStore } from '../../store';
import NewUser from './NewUser';
import UsersList from './UsersList';
import UserDetails from './UserDetails';

function UsersContent () {
  const { usersStore, navStore } = useStore();

  useEffect(() => {
    navStore.navigate('users', navStore.usersViews.list);
    usersStore.fetchUsers();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const { section: { users: usersView}, usersViews } = navStore;
  return (
    <>
      {usersView === usersViews.list && <UsersList />}
      {usersView === usersViews.new && <NewUser />}
      {usersView === usersViews.details && <UserDetails />}
    </>
  );
}

export default observer(UsersContent);
