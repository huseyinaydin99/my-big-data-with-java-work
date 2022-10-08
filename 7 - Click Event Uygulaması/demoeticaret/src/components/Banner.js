import React, { Component } from 'react'
import { sendPost } from "../action/sendEndpoint"


export default class Banner extends Component {
   onBanner=(e)=>{
        e.preventDefault();       
        
        let deviceId = 10000 + Math.floor(Math.random() * 10000)
        let click = e.target.id
        let session = this.props.history.location.pathname
        if (deviceId && click && session) {
            sendPost({ deviceId, click, session })
        }
    }
    render() {
        return (
            <div className="banner">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <div  className="banner__pic" >
                                <img  id="SummerFruit" onClick={this.onBanner} src={process.env.PUBLIC_URL + '/assets/img/banner/banner-1.jpg'} />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <div className="banner__pic">
                                <img id="Fried_Drink_Fruits" onClick={this.onBanner} src={process.env.PUBLIC_URL + '/assets/img/banner/banner-2.jpg'} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
