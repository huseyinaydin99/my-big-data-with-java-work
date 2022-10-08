import React from 'react'
import { NavLink } from "react-router-dom";

export default function Hamburgerheader() {
    return (
        <React.Fragment>
            <div className="humberger__menu__overlay"></div>

            <div className="humberger__menu__wrapper">
                <div className="humberger__menu__logo">
                    <a href="#">
                        <img src={process.env.PUBLIC_URL + '/assets/img/logo.png'} />
                    </a>
                </div>
                <div className="humberger__menu__cart">
                    <ul>
                        <li><a href="#"><i className="fa fa-heart"></i> <span>1</span></a></li>
                        <li><a href="#"><i className="fa fa-shopping-bag"></i> <span>3</span></a></li>
                    </ul>
                    <div className="header__cart__price">item: <span>$150.00</span></div>
                </div>
                <div className="humberger__menu__widget">
                    <div className="header__top__right__language">
                        <img src={process.env.PUBLIC_URL + '/assets/img/language.png'} />

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
                <nav className="humberger__menu__nav mobile-menu">
                    <ul>
                        <li className="active">
                            <NavLink activeClassName="active" exact to="/">Home</NavLink>
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
                <div id="mobile-menu-wrap"></div>
                <div className="header__top__right__social">
                    <a href="#"><i className="fa fa-facebook"></i></a>
                    <a href="#"><i className="fa fa-twitter"></i></a>
                    <a href="#"><i className="fa fa-linkedin"></i></a>
                    <a href="#"><i className="fa fa-pinterest-p"></i></a>
                </div>
                <div className="humberger__menu__contact">
                    <ul>
                        <li><i className="fa fa-envelope"></i> hello@colorlib.com</li>
                        <li>Free Shipping for all Order of $99</li>
                    </ul>
                </div>
            </div>

        </React.Fragment>
    )
}
