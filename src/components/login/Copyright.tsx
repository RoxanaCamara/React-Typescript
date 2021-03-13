import { Typography } from '@material-ui/core';
import Link from '@material-ui/core/Link';
import {  Theme, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(3, 0, 2),
  },
}))

export const Copyright = () => {
  const classes = useStyles();
    return (
      <Typography variant="body2" color="textSecondary" align="center"  className={classes.root}>
        {'Copyright © '}
        <Link color="inherit" href="https://material-ui.com/">
          Your Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }
  