import React from 'react';
import { Container, Typography, Button, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import CartItem from './CartItem/CartItem';
import useStyles from './styles';

export default function Cart({ cart, handleUpdateCartQty, handleRemoveFromCart, handleEmptyCart }) {

  const classes = useStyles();

  const EmptyCart = () => (
    <Typography variant="subtitle1">You have no items in your shopping cart,
      <Link to='/' className={classes.link}> start adding some!</Link>
    </Typography>
  );

  if (!cart.line_items) return "Loading...";

  const FilledCart = () => (
    <>
      <Typography className={classes.title} variant="h4" gutterBottom>Your Shopping Cart</Typography>
      <div className={classes.cardDetailsTop}>
        <Typography className={classes.subtotalTop} variant="h5">subtotal: {cart.subtotal.formatted_with_symbol}</Typography>

        <div>
          <Button className={classes.emptyButtonTop} size="small" type="button" variant="contained" color="secondary" onClick={handleEmptyCart}>Empty Cart</Button>
          <Button component={Link} to="/checkout" className={classes.checkoutButtonTop} size="small" type="button" variant="contained" color="primary">checkout</Button>
        </div>
      </div>

      <Grid container spacing={3}>
        {cart.line_items.map((item) => (

          <Grid item xs={12} sm={4} key={item.id}>
            <CartItem item={item} onUpdateCartQty={handleUpdateCartQty} onRemoveFromCart={handleRemoveFromCart} />
          </Grid>
        ))}
      </Grid>
      <div className={classes.cardDetails}>
        <Typography variant="h4">subtotal: {cart.subtotal.formatted_with_symbol}</Typography>
        <div>
          <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary" onClick={handleEmptyCart}>Empty Cart</Button>
          <Button component={Link} to="/checkout" className={classes.checkoutButton} size="large" type="button" variant="contained" color="primary">checkout</Button>
        </div>
      </div>
    </>
  );

  return (
    <Container>
      <div className={classes.toolbar} />
      {!cart.line_items.length ? <EmptyCart /> : <FilledCart />}
    </Container>
  )
}
