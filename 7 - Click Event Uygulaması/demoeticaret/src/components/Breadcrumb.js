import React from 'react'
import { sendPost } from "../action/sendEndpoint"
import { NavLink } from "react-router-dom"

export default function Breadcrumb(props) {
    let breadcrumb = (e) => {
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
        <section className="breadcrumb-section set-bg" id="shopDomato" onClick={breadcrumb} style={{ background: `url(${process.env.PUBLIC_URL}"/assets/img/breadcrumb.jpg") ` }}>
            <div className="container" id="shopDomato" onClick={breadcrumb}>
                <div className="row" id="shopDomato" onClick={breadcrumb}>
                    <div className="col-lg-12 text-center" id="shopDomato" onClick={breadcrumb}>
                        <div className="breadcrumb__text" id="shopDomato" onClick={breadcrumb}>
                            <h2 id="shopDomato" onClick={breadcrumb} >Organi Shop</h2>
                            <div className="breadcrumb__option">
                                <NavLink activeClassName="active" exact to="/">Home</NavLink>
                                <span>Shop</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}
