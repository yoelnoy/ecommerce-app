import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  media: {
    height: 200,
    backgroundSize: 'contain',
    marginTop: '0.8em'
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: "column"
  },
  cartActions: {
    justifyContent: 'space-between',
  },
  buttons: {
    display: 'flex',
    alignItems: 'center',
  },
}));