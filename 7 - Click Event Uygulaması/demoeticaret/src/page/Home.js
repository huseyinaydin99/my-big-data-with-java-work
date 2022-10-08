import React, { Component } from 'react'
import Hero from "../components//Hero"
import Categorys from "../components/Categorys"
import Featuredspad from "../components/Featuredspad"
import Banner from "../components/Banner"
import Latestproduct from "../components/Latestproduct"
import Blogform from "../components/Blogform"
export default class Home extends Component {

    render() {
        return (
            <React.Fragment>
                <Hero history={this.props.history}/>
                <Categorys history={this.props.history}/>
                <Featuredspad history={this.props.history}/>
                <Banner history={this.props.history}/>
                <Latestproduct history={this.props.history}/>
                <Blogform history={this.props.history}/>
            </React.Fragment>
        )
    }
}
