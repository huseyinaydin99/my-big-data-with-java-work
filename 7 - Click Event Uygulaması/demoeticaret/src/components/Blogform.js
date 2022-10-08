import React from 'react'
import { sendPost } from "../action/sendEndpoint"


export default function Blogform(props) {
    const onblogForm = (e) => {
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
        <section className="from-blog spad">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title from-blog__title">
                            <h2>From The Blog</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {
                        blogForm.map((blog, index) => 
                            <div key={index} className="col-lg-4 col-md-4 col-sm-6">
                                <div className="blog__item">
                                    <div className="blog__item__pic">
                                        <img src={process.env.PUBLIC_URL + blog.path} id={blog.name} onClick={onblogForm} />
                                    </div>
                                    <div className="blog__item__text">
                                        <ul>
                                            <li><i className="fa fa-calendar-o"></i>{blog.dateblog}</li>
                                            <li><i className="fa fa-comment-o"></i> {blog.comment}</li>
                                        </ul>
                                        <h5><a href="#">{blog.title}</a></h5>
                                        <p>{blog.content} </p>
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
const blogForm = [
    {
        name:"PortakalSuyu",
        path: "/assets/img/blog/blog-1.jpg",
        dateblog:"May 4,2019",
        comment: "5",
        title: "Cooking tips make cooking simple",
        content: "Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat",
    },
    {
        name:"YeşilFasülye",
        path: "/assets/img/blog/blog-2.jpg",
        dateblog:"May 4,2019",
        comment: "12",
        title: "6 ways to prepare breakfast for 30",
        content: "Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat ",
    },
    {
        name:"Narenciye",
        path: "/assets/img/blog/blog-3.jpg",
        dateblog:"May 4,2019",
        comment: "15",
        title: "Visit the clean farm in the US",
        content: "Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat",
    }

]