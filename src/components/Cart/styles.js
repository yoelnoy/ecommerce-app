import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  title: {
    marginTop: '3%',
    display: 'flex',
    justifyContent: 'flex-start'
  },
  subtotalTop: {
    paddingLeft: '0.5em'
  },
  emptyButtonTop: {
    minWidth: '50px',
    [theme.breakpoints.down('xs')]: {
      marginBottom: '5px',
    },
    [theme.breakpoints.up('xs')]: {
      marginRight: '10px',
    },
  },
  emptyButton: {
    minWidth: '150px',
    [theme.breakpoints.down('xs')]: {
      marginBottom: '5px',
    },
    [theme.breakpoints.up('xs')]: {
      marginRight: '20px',
    },
  },
  checkoutButtonTop: {
    minWidth: '50px',
  },
  checkoutButton: {
    minWidth: '150px',
  },
  link: {
    textDecoration: 'none',
  },
  cardDetailsTop: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    borderBottom: 'solid 0.5px #e0e0e0',
    marginBottom: '1em',
    paddingBottom: '0.5em'
  },
  cardDetails: {
    display: 'flex',
    borderTop: 'solid 0.5px #e0e0e0',
    paddingTop: '0.5em',
    marginTop: '10%',
    width: '100%',
    justifyContent: 'space-between',
  },
}));