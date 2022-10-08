import React from 'react'
import { sendPost } from "../action/sendEndpoint"



export default function Latestproduct(props) {
    const onLatest = (e) => {
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

        <section className="latest-product spad">
            <div className="container">
                <div className="row">
                    {/* Birinci sutun başlangıç */}
                    <div className="col-lg-4 col-md-6">
                        <div className="latest-product__text">
                            <h4>Latest Products</h4>
                            <div className="latest-product__slider owl-carousel">
                                <div className="latest-prdouct__slider__item">
                                    {
                                        latesproducts.map((product, index) =>
                                            <a key={index} className="latest-product__item" id={product.name} onClick={onLatest}>
                                                <div className="latest-product__item__pic" id={product.name} onClick={onLatest}>
                                                    <img src={process.env.PUBLIC_URL + product.path} id={product.name} onClick={onLatest} />
                                                </div>
                                                <div className="latest-product__item__text" id={product.name} onClick={onLatest}>
                                                    <h6 id={product.name} onClick={onLatest}>{product.title}</h6>
                                                    <span id={product.name} onClick={onLatest}>{product.price}</span>
                                                </div>
                                            </a>

                                        )
                                    }
                                </div>
                                <div className="latest-prdouct__slider__item">
                                {
                                        latesproducts.map((product, index) =>
                                            <a key={index} className="latest-product__item" id={product.name} onClick={onLatest}>
                                                <div className="latest-product__item__pic" id={product.name} onClick={onLatest}>
                                                    <img src={process.env.PUBLIC_URL + product.path} id={product.name} onClick={onLatest} />
                                                </div>
                                                <div className="latest-product__item__text" id={product.name} onClick={onLatest}>
                                                    <h6 id={product.name} onClick={onLatest}>{product.title}</h6>
                                                    <span id={product.name} onClick={onLatest}>{product.price}</span>
                                                </div>
                                            </a>

                                        )
                                    }
                                </div>
                                <div className="latest-prdouct__slider__item">
                                {
                                        latesproducts.map((product, index) =>
                                            <a key={index} className="latest-product__item" id={product.name} onClick={onLatest}>
                                                <div className="latest-product__item__pic" id={product.name} onClick={onLatest}>
                                                    <img src={process.env.PUBLIC_URL + product.path} id={product.name} onClick={onLatest} />
                                                </div>
                                                <div className="latest-product__item__text" id={product.name} onClick={onLatest}>
                                                    <h6 id={product.name} onClick={onLatest}>{product.title}</h6>
                                                    <span id={product.name} onClick={onLatest}>{product.price}</span>
                                                </div>
                                            </a>

                                        )
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Birinci sutun bitiş */}
                    {/* İkinci sutun başlangıç */}
                    <div className="col-lg-4 col-md-6">
                        <div className="latest-product__text">
                            <h4>Top Rated Products</h4>
                            <div className="latest-product__slider owl-carousel">
                                <div className="latest-prdouct__slider__item">
                                    {
                                        latesproducts.map((product, index) =>
                                            <a key={index} className="latest-product__item" id={product.name} onClick={onLatest}>
                                                <div className="latest-product__item__pic" id={product.name} onClick={onLatest}>
                                                    <img src={process.env.PUBLIC_URL + product.path} id={product.name} onClick={onLatest} />
                                                </div>
                                                <div className="latest-product__item__text" id={product.name} onClick={onLatest}>
                                                    <h6 id={product.name} onClick={onLatest}>{product.title}</h6>
                                                    <span id={product.name} onClick={onLatest}>{product.price}</span>
                                                </div>
                                            </a>

                                        )
                                    }
                                </div>
                                <div className="latest-prdouct__slider__item">
                                    {
                                        latesproducts.map((product, index) =>
                                            <a key={index} className="latest-product__item">
                                                <div className="latest-product__item__pic">
                                                    <img src={process.env.PUBLIC_URL + product.path} />
                                                </div>
                                                <div className="latest-product__item__text">
                                                    <h6>{product.title}</h6>
                                                    <span>{product.price}</span>
                                                </div>
                                            </a>

                                        )
                                    }
                                </div>
                                <div className="latest-prdouct__slider__item">
                                    {
                                        latesproducts.map((product, index) =>
                                            <a key={index} className="latest-product__item">
                                                <div className="latest-product__item__pic">
                                                    <img src={process.env.PUBLIC_URL + product.path} />
                                                </div>
                                                <div className="latest-product__item__text">
                                                    <h6>{product.title}</h6>
                                                    <span>{product.price}</span>
                                                </div>
                                            </a>

                                        )
                                    }
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* İkinci sutun Bitiş */}
                    {/* Uçüncü sutun başlangıç */}
                    <div className="col-lg-4 col-md-6">
                        <div className="latest-product__text">
                            <h4>Review Products</h4>
                            <div className="latest-product__slider owl-carousel">
                                <div className="latest-prdouct__slider__item">
                                    {
                                        latesproducts.map((product, index) =>
                                            <a key={index} className="latest-product__item" id={product.name} onClick={onLatest}>
                                                <div className="latest-product__item__pic" id={product.name} onClick={onLatest}>
                                                    <img src={process.env.PUBLIC_URL + product.path} id={product.name} onClick={onLatest} />
                                                </div>
                                                <div className="latest-product__item__text" id={product.name} onClick={onLatest}>
                                                    <h6 id={product.name} onClick={onLatest}>{product.title}</h6>
                                                    <span id={product.name} onClick={onLatest}>{product.price}</span>
                                                </div>
                                            </a>

                                        )
                                    }
                                </div>
                                <div className="latest-prdouct__slider__item">
                                    {
                                        latesproducts.map((product, index) =>
                                            <a key={index} className="latest-product__item">
                                                <div className="latest-product__item__pic">
                                                    <img src={process.env.PUBLIC_URL + product.path} />
                                                </div>
                                                <div className="latest-product__item__text">
                                                    <h6>{product.title}</h6>
                                                    <span>{product.price}</span>
                                                </div>
                                            </a>

                                        )
                                    }
                                </div>
                                <div className="latest-prdouct__slider__item">
                                    {
                                        latesproducts.map((product, index) =>
                                            <a key={index} className="latest-product__item">
                                                <div className="latest-product__item__pic">
                                                    <img src={process.env.PUBLIC_URL + product.path} />
                                                </div>
                                                <div className="latest-product__item__text">
                                                    <h6>{product.title}</h6>
                                                    <span>{product.price}</span>
                                                </div>
                                            </a>

                                        )
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Uçüncü sutun başlangıç */}
                </div>
            </div>

        </section>

    )
}
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