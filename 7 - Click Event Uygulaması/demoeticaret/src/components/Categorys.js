import React from 'react'
import { sendPost } from "../action/sendEndpoint"


export default class Categorys extends React.Component {
    selectedCategory = (e) => {
        e.preventDefault();
        e.stopPropagation();

        let deviceId = 10000 + Math.floor(Math.random() * 10000)
        let click = e.target.id
        let session = this.props.history.location.pathname
        if (deviceId && click && session) {
            sendPost({ deviceId, click, session })
        }
    }
    render() {
        return (
            <section className="categories">
                <div className="container">
                    <div className="row">
                        <div className="categories__slider owl-carousel">
                            {
                                categorys.map((category, index) =>
                                    <div className="col-lg-3" key={index}>
                                        <div className="categories__item set-bg" id={category.name} onClick={this.selectedCategory} style={{ backgroundImage: `url(${process.env.PUBLIC_URL + category.path})` }}>
                                            <h5 id={category.name} onClick={this.selectedCategory} >
                                                <a id={category.name} onClick={this.selectedCategory} >{category.title}</a>
                                            </h5>
                                        </div>
                                    </div>
                                )

                            }                           
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

const categorys = [
    {
        name: "PORTAKAL",
        path: "/assets/img/categories/cat-1.jpg",
        title: "Fresh Fruit"
    },
    {
        name: "KURU_YEMIS",
        path: "/assets/img/categories/cat-2.jpg",
        title: "Dried Fruit"
    },
    {
        name: "SEBZE_PAKETI",
        path: "/assets/img/categories/cat-3.jpg",
        title: "Vegetables"
    },
    {
        name: "MEYVE_SUYU",
        path: "/assets/img/categories/cat-4.jpg",
        title: "drink fruits"
    },
    {
        name: "ET",
        path: "/assets/img/categories/cat-5.jpg",
        title: "drink fruits"
    }

]