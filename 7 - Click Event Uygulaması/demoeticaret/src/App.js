import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Hamburgerheader from './components/Hamburgerheader';
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./page/Home"
import Shopgrid from "./page/Shopgrid"
import Shopdetails from "./page/Shopdetails"
import Shopingcard from "./page/Shopingcard"
import Checkout from "./page/Checkout"
import Blogdetails from "./page/Blogdetails"
import Blog from "./page/Blog"
import Contact from "./page/Contact"

function App() {
    return (
        <React.Fragment>
            <Hamburgerheader />
            <Header />
            <Switch>
                <Route exact path='/' component={Home}></Route>
                <Route exact path='/shop-grid' component={Shopgrid}></Route>
                <Route exact path='/shop-details' component={Shopdetails}></Route>
                <Route exact path='/shoping-cart' component={Shopingcard}></Route>
                <Route exact path='/checkout' component={Checkout}></Route>
                <Route exact path='/blog-details' component={Blogdetails}></Route>
                <Route exact path='/blog' component={Blog}></Route>
                <Route exact path='/contact' component={Contact}></Route>
            </Switch>
            <Footer />

        </React.Fragment>

    )
}

export default App;
