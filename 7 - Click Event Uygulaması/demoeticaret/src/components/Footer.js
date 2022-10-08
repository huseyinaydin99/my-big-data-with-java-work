import React from 'react'

export default function Footer() {
    return (
        <footer className="footer spad">
        <div className="container">
            <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="footer__about">
                        <div className="footer__about__logo">
                            <a href="./index.html">
                            <img  src={process.env.PUBLIC_URL + '/assets/img/logo.png'} />                                 
                            </a>
                        </div>
                        <ul>
                            <li>Address: 60-49 Road 11378 New York</li>
                            <li>Phone: +65 11.188.888</li>
                            <li>Email: hello@colorlib.com</li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 offset-lg-1">
                    <div className="footer__widget">
                        <h6>Useful Links</h6>
                        <ul>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">About Our Shop</a></li>
                            <li><a href="#">Secure Shopping</a></li>
                            <li><a href="#">Delivery infomation</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Our Sitemap</a></li>
                        </ul>
                        <ul>
                            <li><a href="#">Who We Are</a></li>
                            <li><a href="#">Our Services</a></li>
                            <li><a href="#">Projects</a></li>
                            <li><a href="#">Contact</a></li>
                            <li><a href="#">Innovation</a></li>
                            <li><a href="#">Testimonials</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-4 col-md-12">
                    <div className="footer__widget">
                        <h6>Join Our Newsletter Now</h6>
                        <p>Get E-mail updates about our latest shop and special offers.</p>
                        <form action="#">
                            <input type="text" placeholder="Enter your mail" />
                            <button type="submit" className="site-btn">Subscribe</button>
                        </form>
                        <div className="footer__widget__social">
                            <a href="#"><i className="fa fa-facebook"></i></a>
                            <a href="#"><i className="fa fa-instagram"></i></a>
                            <a href="#"><i className="fa fa-twitter"></i></a>
                            <a href="#"><i className="fa fa-pinterest"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <div className="footer__copyright">
                        <div className="footer__copyright__text"><p>
                            Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i className="fa fa-heart" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
                        </p></div>
                        <div className="footer__copyright__payment"> 
                        <img  src={process.env.PUBLIC_URL + '/assets/img/payment-item.png'} />   
                     x
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    )
}
