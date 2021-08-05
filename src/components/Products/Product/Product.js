import React from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';
import useStyles from './styles'

export default function Product({ product, onAddToCart }) {

  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media} image={product.media.source} title={product.name} />
      <CardContent>
        <div className={classes.cardcontent}>
          <Typography varient="h5" gutterBottom>
            {product.name}
          </Typography>
          <Typography varient="h5">
            {product.price.formatted_with_symbol}
          </Typography>
        </div>
        <Typography dangerouslySetInnerHTML={{ __html: product.description }} varient="body2" color="textSecondary" />
        <CardActions disableSpacing className={classes.cardActions}>
          <IconButton aria-label="Add to cart" onClick={() => onAddToCart(product.id, 1)}>
            <AddShoppingCart style={{ color: "rgb(85, 236, 192)" }} />
          </IconButton>
        </CardActions>

      </CardContent>

    </Card>
  )
}
