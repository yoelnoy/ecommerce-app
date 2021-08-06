import React, { useState, useEffect } from 'react'
import './App.css';
import { commerce } from './lib/Commerce';
import { Products, Navbar, Cart, Checkout } from './components'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Loader from 'react-spinners/ClipLoader';
// import { log } from 'async';

function App() {

  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [order, setOrder] = useState({});
  const [errorMessage, setErrorMessage] = useState('');
  const [loader, setLoader] = useState(true);

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
    setLoader(false);
  }

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  }

  const handleAddToCart = async (productId, quantity) => {
    const { cart } = await commerce.cart.add(productId, quantity);
    setCart(cart);
  }

  const handleUpdateCartQty = async (productId, quantity) => {
    const { cart } = await commerce.cart.update(productId, { quantity });
    setCart(cart);
  }

  const handleRemoveFromCart = async (productId) => {
    const { cart } = await commerce.cart.remove(productId);
    setCart(cart);
  }

  const handleEmptyCart = async () => {
    const { cart } = await commerce.cart.empty();
    setCart(cart);
  }

  const refreshCart = async () => {
    const newCart = await commerce.cart.refresh();

    setCart(newCart);
  };

  const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
    try {
      const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder);
      setOrder(incomingOrder);
      refreshCart();
    } catch (error) {
      setErrorMessage(error.data.error.message)
    }
  }

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, [])


  return (
    <Router>
      <div className="App">

        <Navbar totalItems={cart.total_items} />
        {loader ? (
          <div className="app__loader">
            <Loader color="rgb(85, 236, 192)" loading={loader} size={350} />
          </div>
        ) : (
          <Switch>
            <Route exact path="/">
              <Products products={products} onAddToCart={handleAddToCart} />
            </Route>
            <Route exact path="/cart">
              <Cart cart={cart} handleUpdateCartQty={handleUpdateCartQty} handleRemoveFromCart={handleRemoveFromCart} handleEmptyCart={handleEmptyCart} />
            </Route>
            <Route exact path="/checkout">
              <Checkout cart={cart} order={order} onCaptureCheckout={handleCaptureCheckout} error={errorMessage} refreshCart={refreshCart} />
            </Route>
          </Switch>
        )}

      </div>
    </Router>
  );
}

export default App;
