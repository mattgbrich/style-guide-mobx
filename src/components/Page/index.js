import React from 'react';
import Typography from '@material-ui/core/Typography';
import ContentTabs from '../ContentTabs';
import useStyles from './styles';

function Page () {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Typography variant="h2">MobX Demo App</Typography>
      <ContentTabs />
    </div>
  );
}

export default Page;
