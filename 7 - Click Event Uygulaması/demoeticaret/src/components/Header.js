import React from 'react'
import { NavLink } from "react-router-dom";
export default function Header() {
    return (

        <header className="header">
            <div className="header__top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <div className="header__top__left">
                                <ul>
                                    <li><i className="fa fa-envelope"></i> hello@colorlib.com</li>
                                    <li>Free Shipping for all Order of $99</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="header__top__right">
                                <div className="header__top__right__social">
                                    <a href="#"><i className="fa fa-facebook"></i></a>
                                    <a href="#"><i className="fa fa-twitter"></i></a>
                                    <a href="#"><i className="fa fa-linkedin"></i></a>
                                    <a href="#"><i className="fa fa-pinterest-p"></i></a>
                                </div>
                                <div className="header__top__right__language">
                                    <img src={process.env.PUBLIC_URL + '/assets/img/language.png'} />
                                    {/* <img src={require('./assets/img/language.png')} /> */}



                                    <div>English</div>
                                    <span className="arrow_carrot-down"></span>
                                    <ul>
                                        <li><a href="#">Spanis</a></li>
                                        <li><a href="#">English</a></li>
                                    </ul>
                                </div>
                                <div className="header__top__right__auth">
                                    <a href="#"><i className="fa fa-user"></i> Login</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="header__logo">
                            <a href="./index.html">
                                {/* <img src={require('./assets/img/logo.png')} /> */}
                                <img src={process.env.PUBLIC_URL + '/assets/img/logo.png'} />


                            </a>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <nav className="header__menu">
                            <ul>
                                <li>
                                    <NavLink activeClassName="active"exact to="/">Home</NavLink>
                                </li>
                                <li>
                                    <NavLink activeClassName="active" exact to="/shop-grid">Shop</NavLink>                                
                                </li>
                                <li>
                                    <NavLink activeClassName="active" exact to="/shop-detail">Pages</NavLink>
                                    <ul className="header__menu__dropdown">
                                        <li>
                                            <NavLink activeClassName="active" exact to="/shop-details">Shop Details</NavLink>
                                        </li>
                                        <li>
                                            <NavLink activeClassName="active" exact to="/shoping-cart">Shoping Cart</NavLink>
                                        </li>
                                        <li>
                                            <NavLink activeClassName="active" exact to="/checkout">Check Out</NavLink>
                                        </li>
                                        <li>
                                            <NavLink activeClassName="active" exact to="/blog-details">Blog Details</NavLink>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <NavLink exact to="/blog">Blog</NavLink>
                                </li>
                                <li>
                                    <NavLink exact to="/contact">Contact</NavLink>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="col-lg-3">
                        <div className="header__cart">
                            <ul>
                                <li><a href="#"><i className="fa fa-heart"></i> <span>1</span></a></li>
                                <li><a href="#"><i className="fa fa-shopping-bag"></i> <span>3</span></a></li>
                            </ul>
                            <div className="header__cart__price">item: <span>$150.00</span></div>
                        </div>
                    </div>
                </div>
                <div className="humberger__open">
                    <i className="fa fa-bars"></i>
                </div>
            </div>
        </header>
    )
}
