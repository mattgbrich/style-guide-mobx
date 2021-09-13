import React from 'react';
import { observer } from 'mobx-react'
import { Tabs, Tab, Paper } from '@material-ui/core';
import { useStore } from '../../store';
import useStyles from './styles';
import UsersContent from '../UsersContent';
import FoodsContent from '../FoodsContent';

function ContentTabs () {
  const { uiStore } = useStore();
  const classes = useStyles();

  const handleTabChange = (e, val) => uiStore.selectTab(val);

  return (
    <div className={classes.container}>
      <Tabs 
        value={uiStore.selectedTab} 
        onChange={handleTabChange}
        indicatorColor="primary"
        textColor="secondary"
        variant="fullWidth"
        classes={{
          root: classes.tabsRoot
        }}
      >
        <Tab label="Users" />
        <Tab label="Foods" />
      </Tabs>
      <Paper className={classes.paper}>
        {uiStore.selectedTab === 0 && <UsersContent />}
        {uiStore.selectedTab === 1 && <FoodsContent />}
      </Paper>
    </div>
  );
}

export default observer(ContentTabs);
