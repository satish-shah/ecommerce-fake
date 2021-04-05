import "./index";
import React from "react";
import Products from "../src/pages/Products";
import Navbar from "./components/Navbar";
import { CartProvider } from "./context/Cart";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Checkout from "./components/Checkout";
import Menu from "./components/Menu";
import Home from "./pages/Home";
import Product from "./pages/Product"

const App = () => {
    const [cart, setCart] = React.useState([]);
    let tempCart = [...cart];
    const addItem = (productId) => {
        const checkProduct = cart.find(({ id }) => id === productId);
        if (checkProduct) {
            tempCart = tempCart.map((item) => {
                const a = productId === item.id ? { ...item, quantity: item.quantity + 1 } : item;
                return a;
            });
            setCart(tempCart);
        } else {
            tempCart.push({ id: productId, quantity: 1 });
            setCart(tempCart);
        }
    };
    const clearAll = () => {
        setCart([]);
    };
    const value = React.useMemo(
        () => ({
            cart,
            addItem,
            clearAll,
        }),
        [cart]
    );
    return (
        <div className="App">
            <Router >

                <CartProvider value={value}>
                    <Navbar />
                    <Menu />
                    <Switch>
                        <Route exact path="/checkout">
                            <Checkout />
                        </Route>
                        <Route path="/:category/:productId">
                            <Product />
                        </Route>
                        <Route exact path="/:category">
                            <Products />
                        </Route>
                        <Route exact path="/">
                            <Home />
                        </Route>
                    </Switch>
                </CartProvider>

            </Router>
        </div>
    );
};
export default App;