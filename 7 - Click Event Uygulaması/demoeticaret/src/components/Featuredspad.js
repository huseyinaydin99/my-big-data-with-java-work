import React from 'react'
import { sendPost } from "../action/sendEndpoint"



export default function Featuredspad(props) {
    const onFeatured = (e) => {
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
        <section className="featured spad">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title">
                            <h2>Featured Product</h2>
                        </div>
                        <div className="featured__controls">
                            <ul>
                                <li className="active" data-filter="*">All</li>
                                <li data-filter=".oranges">Oranges</li>
                                <li data-filter=".fresh-meat">Fresh Meat</li>
                                <li data-filter=".vegetables">Vegetables</li>
                                <li data-filter=".fastfood">Fastfood</li>
                            </ul>
                        </div>
                    </div>
                </div>
           
                <div className="row featured__filter">
                    {
                        featureds.map((featured, index) =>
                            <div key={index} className={featured.className} id={featured.name} onClick={onFeatured}>
                                <div className="featured__item" id={featured.name} onClick={onFeatured}>
                                    <div className="featured__item__pic set-bg" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + featured.path})` }} id={featured.name} onClick={onFeatured}>
                                        <ul className="featured__item__pic__hover" id={featured.name} onClick={onFeatured}>
                                            <li><a href="#"><i className="fa fa-heart"></i></a></li>
                                            <li><a href="#"><i className="fa fa-retweet"></i></a></li>
                                            <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
                                        </ul>
                                    </div>
                                    <div className="featured__item__text" id={featured.name} onClick={onFeatured}>
                                        <h6><a id={featured.name} onClick={onFeatured}>{featured.title}</a></h6>
                                        <h5>{featured.price}</h5>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </section>


    )
}
const featureds = [
    {
        name: "ET",
        path: "/assets/img/featured/feature-1.jpg",
        className: "col-lg-3 col-md-4 col-sm-6 mix oranges fresh-meat",
        title: "Crab Pool Security",
        price: "$30.00"
    },
    {
        name: "MUZ",
        path: "/assets/img/featured/feature-2.jpg",
        className: "col-lg-3 col-md-4 col-sm-6 mix hero__categories__all fastfood",
        title: "Crab Pool Security",
        price: "$30.00"
    },
    {
        name: "TROPICAL-MEYVE",
        path: "/assets/img/featured/feature-3.jpg",
        className: "col-lg-3 col-md-4 col-sm-6 mix vegetables fresh-meat",
        title: "Crab Pool Security",
        price: "$30.00"
    },
    {
        name: "KARPUZ",
        path: "/assets/img/featured/feature-4.jpg",
        className: "col-lg-3 col-md-4 col-sm-6 mix fastfood oranges",
        title: "Crab Pool Security",
        price: "$30.00"
    },
    {
        name: "UZUM",
        path: "/assets/img/featured/feature-5.jpg",
        className: "col-lg-3 col-md-4 col-sm-6 mix fresh-meat vegetables",
        title: "Crab Pool Security",
        price: "$30.00"
    },
    {
        name: "SANDIVIC",
        path: "/assets/img/featured/feature-6.jpg",
        className: "col-lg-3 col-md-4 col-sm-6 mix oranges fastfood",
        title: "Crab Pool Security",
        price: "$30.00"
    },
    {
        name: "ANANAS",
        path: "/assets/img/featured/feature-7.jpg",
        className: "col-lg-3 col-md-4 col-sm-6 mix fresh-meat vegetables",
        title: "Crab Pool Security",
        price: "$30.00"
    },
    {
        name: "ELMA",
        path: "/assets/img/featured/feature-8.jpg",
        className: "col-lg-3 col-md-4 col-sm-6 mix fastfood vegetables",
        title: "Crab Pool Security",
        price: "$30.00"
    }
]