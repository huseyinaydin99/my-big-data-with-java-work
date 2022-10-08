import React from 'react'
import {sendPost} from "../action/sendEndpoint"



export default function Productsapad(props) {
    const onProductsapad = (e) => {
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
        <section className="product spad">
            <div className="container">
                <div className="row">
                    {/* SOL TARAF BAŞLANGIÇ */}
                    <div className="col-lg-3 col-md-5">
                        <div className="sidebar">
                            <div className="sidebar__item">
                                <h4>Department</h4>
                                <ul>
                                    <li><a href="#">Fresh Meat</a></li>
                                    <li><a href="#">Vegetables</a></li>
                                    <li><a href="#">Fruit &amp; Nut Gifts</a></li>
                                    <li><a href="#">Fresh Berries</a></li>
                                    <li><a href="#">Ocean Foods</a></li>
                                    <li><a href="#">Butter &amp; Eggs</a></li>
                                    <li><a href="#">Fastfood</a></li>
                                    <li><a href="#">Fresh Onion</a></li>
                                    <li><a href="#">Papayaya &amp; Crisps</a></li>
                                    <li><a href="#">Oatmeal</a></li>
                                </ul>
                            </div>
                            <div className="sidebar__item">
                                <h4>Price</h4>
                                <div className="price-range-wrap">
                                    <div className="price-range ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content" data-min={10} data-max={540}>
                                        <div className="ui-slider-range ui-corner-all ui-widget-header" />
                                        <span className="ui-slider-handle ui-corner-all ui-state-default" />
                                        <span className="ui-slider-handle ui-corner-all ui-state-default" />
                                    </div>
                                    <div className="range-slider">
                                        <div className="price-input">
                                            <input type="text" id="minamount" />
                                            <input type="text" id="maxamount" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="sidebar__item sidebar__item__color--option">
                                <h4>Colors</h4>
                                <div className="sidebar__item__color sidebar__item__color--white">
                                    <label htmlFor="white">
                                        White
          <input type="radio" id="white" />
                                    </label>
                                </div>
                                <div className="sidebar__item__color sidebar__item__color--gray">
                                    <label htmlFor="gray">
                                        Gray
          <input type="radio" id="gray" />
                                    </label>
                                </div>
                                <div className="sidebar__item__color sidebar__item__color--red">
                                    <label htmlFor="red">
                                        Red
          <input type="radio" id="red" />
                                    </label>
                                </div>
                                <div className="sidebar__item__color sidebar__item__color--black">
                                    <label htmlFor="black">
                                        Black
          <input type="radio" id="black" />
                                    </label>
                                </div>
                                <div className="sidebar__item__color sidebar__item__color--blue">
                                    <label htmlFor="blue">
                                        Blue
          <input type="radio" id="blue" />
                                    </label>
                                </div>
                                <div className="sidebar__item__color sidebar__item__color--green">
                                    <label htmlFor="green">
                                        Green
          <input type="radio" id="green" />
                                    </label>
                                </div>
                            </div>
                            <div className="sidebar__item">
                                <h4>Popular Size</h4>
                                <div className="sidebar__item__size">
                                    <label htmlFor="large">
                                        Large
          <input type="radio" id="large" />
                                    </label>
                                </div>
                                <div className="sidebar__item__size">
                                    <label htmlFor="medium">
                                        Medium
          <input type="radio" id="medium" />
                                    </label>
                                </div>
                                <div className="sidebar__item__size">
                                    <label htmlFor="small">
                                        Small
                               <input type="radio" id="small" />
                                    </label>
                                </div>
                                <div className="sidebar__item__size">
                                    <label htmlFor="tiny">
                                        Tiny
                                  <input type="radio" id="tiny" />
                                    </label>
                                </div>
                            </div>
                            <div className="sidebar__item">
                                <div className="latest-product__text">
                                    <h4>Latest Products</h4>
                                    <div className="latest-product__slider owl-carousel">
                                        <div className="latest-prdouct__slider__item">
                                            {
                                                latesproducts.map((product, index) =>
                                                    <a key={index} className="latest-product__item" id={product.name} onClick={onProductsapad}>
                                                        <div className="latest-product__item__pic" id={product.name} onClick={onProductsapad}>
                                                            <img src={process.env.PUBLIC_URL + product.path} id={product.name} onClick={onProductsapad} />
                                                        </div>
                                                        <div className="latest-product__item__text" id={product.name} onClick={onProductsapad}>
                                                            <h6 id={product.name} onClick={onProductsapad}>{product.title}</h6>
                                                            <span id={product.name} onClick={onProductsapad}>{product.price}</span>
                                                        </div>
                                                    </a>

                                                )
                                            }
                                        </div>
                                        <div className="latest-prdouct__slider__item">
                                        {
                                                latesproducts.map((product, index) =>
                                                    <a key={index} className="latest-product__item" id={product.name} onClick={onProductsapad}>
                                                        <div className="latest-product__item__pic" id={product.name} onClick={onProductsapad}>
                                                            <img src={process.env.PUBLIC_URL + product.path} id={product.name} onClick={onProductsapad} />
                                                        </div>
                                                        <div className="latest-product__item__text" id={product.name} onClick={onProductsapad}>
                                                            <h6 id={product.name} onClick={onProductsapad}>{product.title}</h6>
                                                            <span id={product.name} onClick={onProductsapad}>{product.price}</span>
                                                        </div>
                                                    </a>

                                                )
                                            }
                                        </div>
                                        <div className="latest-prdouct__slider__item">
                                        {
                                                latesproducts.map((product, index) =>
                                                    <a key={index} className="latest-product__item" id={product.name} onClick={onProductsapad}>
                                                        <div className="latest-product__item__pic" id={product.name} onClick={onProductsapad}>
                                                            <img src={process.env.PUBLIC_URL + product.path} id={product.name} onClick={onProductsapad} />
                                                        </div>
                                                        <div className="latest-product__item__text" id={product.name} onClick={onProductsapad}>
                                                            <h6 id={product.name} onClick={onProductsapad}>{product.title}</h6>
                                                            <span id={product.name} onClick={onProductsapad}>{product.price}</span>
                                                        </div>
                                                    </a>

                                                )
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* SOL TARAF BITIS */}
                    <div className="col-lg-9 col-md-7">
                        {/* SĞ SALE OFF BASLANGIC */}
                        <div className="product__discount">
                            <div className="section-title product__discount__title">
                                <h2>Sale Off</h2>
                            </div>

                            <div className="row">
                                <div className="product__discount__slider owl-carousel">
                                    {
                                        saleproducts.map((product, index) =>
                                            <div key={index} className="col-lg-4">
                                                <div className="product__discount__item">
                                                    <div className="product__discount__item__pic set-bg"
                                                        id={product.name} onClick={onProductsapad}
                                                        style={{ backgroundImage: `url(${process.env.PUBLIC_URL + product.path})` }}
                                                    >
                                                        <div className="product__discount__percent">{product.sale}</div>
                                                        <ul className="product__item__pic__hover">
                                                            <li><a href="#"><i className="fa fa-heart" /></a></li>
                                                            <li><a href="#"><i className="fa fa-retweet" /></a></li>
                                                            <li><a href="#"><i className="fa fa-shopping-cart" /></a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="product__discount__item__text">
                                                        <span>{product.title}</span>
                                                        <h5><a href="#">{product.link}</a></h5>
                                                        <div className="product__item__price">{product.newprice} <span>{product.oldprice}</span></div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                        {/* SĞ SALE OFF BITIS */}
                        {/* SĞ SORTBY OFF BITIS */}
                        <div className="filter__item">
                            <div className="row">
                                <div className="col-lg-4 col-md-5">
                                    <div className="filter__sort">
                                        <span>Sort By</span>
                                        <select>
                                            <option value={0}>Default</option>
                                            <option value={0}>Default</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4">
                                    <div className="filter__found">
                                        <h6><span>16</span> Products found</h6>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-3">
                                    <div className="filter__option">
                                        <span className="icon_grid-2x2" />
                                        <span className="icon_ul" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            {
                                sortproducts.map((product, index) =>
                                    <div key={index} className="col-lg-4 col-md-6 col-sm-6">
                                        <div className="product__item">
                                            <div className="product__item__pic set-bg"
                                                id={product.name} onClick={onProductsapad}
                                                style={{ backgroundImage: `url(${process.env.PUBLIC_URL + product.path})` }}
                                            >
                                                <ul className="product__item__pic__hover">
                                                    <li><a href="#"><i className="fa fa-heart" /></a></li>
                                                    <li><a href="#"><i className="fa fa-retweet" /></a></li>
                                                    <li><a href="#"><i className="fa fa-shopping-cart" /></a></li>
                                                </ul>
                                            </div>
                                            <div className="product__item__text">
                                                <h6><a href="#">{product.link}</a></h6>
                                                <h5>{product.price}</h5>
                                            </div>
                                        </div>
                                    </div>

                                )
                            }
                        </div>

                        {/* SAĞ SORT BY BITIS */}
                        <div className="product__pagination">
                            <a href="#">1</a>
                            <a href="#">2</a>
                            <a href="#">3</a>
                            <a href="#"><i className="fa fa-long-arrow-right" /></a>
                        </div>
                    </div>



                    {/* SĞ SORT BY BITIS */}
                </div>
            </div>
        </section>

    )
}
const saleproducts = [
    {
        name: "ET",
        path: "/assets/img/product/discount/pd-1.jpg",
        sale: "-20%",
        title: "Dried Fruit",
        link: "Raisin’n’nuts",
        oldprice: "$36.00",
        newprice: "$30.00"
    },
    {
        name: "MUZ",
        path: "/assets/img/product/discount/pd-2.jpg",
        sale: "-20%",
        title: "Vegetables",
        link: "Vegetables’package",
        oldprice: "$36.00",
        newprice: "$30.00"
    },
    {
        name: "TROPICAL",
        path: "/assets/img/product/discount/pd-3.jpg",
        sale: "-20%",
        title: "Dried Fruit",
        link: "Mixed Fruitss",
        oldprice: "$36.00",
        newprice: "$30.00"
    },
    {
        name: "UZUM",
        path: "/assets/img/product/discount/pd-4.jpg",
        sale: "-20%",
        title: "",
        link: "",
        oldprice: "$36.00",
        newprice: "$30.00"
    },
    {
        name: "SANDIVIC",
        path: "/assets/img/product/discount/pd-5.jpg",
        sale: "-20%",
        title: "Dried Fruit",
        link: "Raisin’n’nuts",
        oldprice: "$36.00",
        newprice: "$30.00"
    },
    {
        name: "ANANAS",
        path: "/assets/img/product/discount/pd-6.jpg",
        sale: "-20%",
        title: "Mixed Fruitss",
        link: "Mixed Fruitss",
        oldprice: "$36.00",
        newprice: "$30.00"
    }

]
const sortproducts = [
    {
        name: "ET",
        path: "/assets/img/product/product-1.jpg",
        link: "Mixed Fruitss",
        price: "$30.00"
    },
    {
        name: "MUZ",
        path: "/assets/img/product/product-2.jpg",
        link: "Mixed Fruitss",
        price: "$30.00"
    },
    {
        name: "TROPICAL",
        path: "/assets/img/product/product-3.jpg",
        link: "Mixed Fruitss",
        price: "$30.00"
    },
    {
        name: "UZUM",
        path: "/assets/img/product/product-4.jpg",
        link: "Mixed Fruitss",
        price: "$30.00"
    },
    {
        name: "SANDIVIC",
        path: "/assets/img/product/product-5.jpg",
        link: "Mixed Fruitss",
        price: "$30.00"
    },
    {
        name: "ANANAS",
        path: "/assets/img/product/product-6.jpg",
        link: "Mixed Fruitss",
        price: "$30.00"
    },
    {
        name: "KARPUZ",
        path: "/assets/img/product/product-7.jpg",
        link: "Mixed Fruitss",
        price: "$30.00"
    },
    {
        name: "ELMA",
        path: "/assets/img/product/product-8.jpg",
        link: "Mixed Fruitss",
        price: "$30.00"
    },
    {
        name: "ZEYTİN",
        path: "/assets/img/product/product-9.jpg",
        link: "Mixed Fruitss",
        price: "$30.00"
    },
    {
        name: "TAVUK",
        path: "/assets/img/product/product-10.jpg",
        link: "Mixed Fruitss",
        price: "$30.00"
    },
    {
        name: "MEYVESUYU",
        path: "/assets/img/product/product-11.jpg",
        link: "Mixed Fruitss",
        price: "$30.00"
    },
    {
        name: "MEYVALAR",
        path: "/assets/img/product/product-12.jpg",
        link: "Mixed Fruitss",
        price: "$30.00"
    }
]
const latesproducts = [
    {
        name: "YAPRAK",
        path: "/assets/img/latest-product/lp-1.jpg",
        title: "Crab Pool Security",
        price: "$30.00"
    },
    {
        name: "BIBER",
        path: "/assets/img/latest-product/lp-2.jpg",
        title: "Crab Pool Security",
        price: "$30.00"
    },
    {
        name: "TAVUK_BUDU",
        path: "/assets/img/latest-product/lp-3.jpg",
        title: "Crab Pool Security",
        price: "$30.00"
    }
]