import React from 'react'
import { sendPost } from "../action/sendEndpoint"

export default function Hero(props) {
    let onHandle = (e) => {
        e.preventDefault();
        e.stopPropagation();
        let deviceId = 10000 + Math.floor(Math.random() * 10000)
        let click = e.target.id
        let session = props.history.location.pathname
        if (deviceId && click && session) {
            sendPost({ deviceId, click, session })
        }
    }

    return (
        <section className="hero">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="hero__categories">
                            <div className="hero__categories__all">
                                <i className="fa fa-bars"></i>
                                <span>All departments</span>
                            </div>
                            <ul>
                                <li><a href="#">Fresh Meat</a></li>
                                <li><a href="#">Vegetables</a></li>
                                <li><a href="#">Fruit & Nut Gifts</a></li>
                                <li><a href="#">Fresh Berries</a></li>
                                <li><a href="#">Ocean Foods</a></li>
                                <li><a href="#">Butter & Eggs</a></li>
                                <li><a href="#">Fastfood</a></li>
                                <li><a href="#">Fresh Onion</a></li>
                                <li><a href="#">Papayaya & Crisps</a></li>
                                <li><a href="#">Oatmeal</a></li>
                                <li><a href="#">Fresh Bananas</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-9">
                        <div className="hero__search">
                            <div className="hero__search__form">
                                <form action="#">
                                    <div className="hero__search__categories">
                                        All Categories
                                    <span className="arrow_carrot-down"></span>
                                    </div>
                                    <input type="text" placeholder="What do yo u need?" />
                                    <button type="submit" className="site-btn">SEARCH</button>
                                </form>
                            </div>
                            <div className="hero__search__phone">
                                <div className="hero__search__phone__icon">
                                    <i className="fa fa-phone"></i>
                                </div>
                                <div className="hero__search__phone__text">
                                    <h5>+65 11.188.888</h5>
                                    <span>support 24/7 time</span>
                                </div>
                            </div>
                        </div>
                        <img src={process.env.PUBLIC_URL + '/assets/img/logo.png'} />

                        <div className="hero__item set-bg" id="vegetable" onClick={onHandle} style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/img/hero/banner.jpg)` }}>
                            <div className="hero__text" id="vegetable" onClick={onHandle}  >
                                <span id="vegetable" onClick={onHandle} >FRUIT FRESH</span>
                                <h2 id="vegetable" onClick={onHandle} >Vegetable <br />100% Organic</h2>
                                <p id="vegetable" onClick={onHandle} >Free Pickup and Delivery Available</p>
                                <a href="#" className="primary-btn" id="vegetable" onClick={onHandle} >SHOP NOW</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
