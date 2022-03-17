import React from "react"
import { Link } from "react-router-dom";
import { useState, useLayoutEffect } from "react"
import axios from 'axios'


function News(props) {
    const [posts, setPost] = useState([])
    useLayoutEffect(() => {
        axios.get(`https://sever-coffeehouse.herokuapp.com/news`)
            .then((response) => {
                setPost(response.data.dataPosts);
            });
    }, [])
    if (!posts) return null;
    console.log(posts)


    return (
        <>

            <div className="container-fluid">
                <div className="pd-w-100 section-Chapter">
                    <div className="text-center fs-3">
                        <i className="fas fa-newspaper fs-4 color-primary" /> Tin tức
                    </div>
                    <div className="preview-News mt-5">
                        <div className="row my-3">
                            {posts.map(post => (
                                <div key={post._id} className="col-lg-3 col-md-6 col-sm-12 my-2" >
                                    <Link to={`/news/${post.slug}`}>
                                        <img
                                            className="img-News"
                                            src={`https://sever-coffeehouse.herokuapp.com/uploads/${post.image}`}
                                            alt="post"
                                        />
                                    </Link>
                                    <div className="border-news">
                                        <div className="my-4">
                                            <h6 className="text-uppercase cut-text fw-bold">
                                                {post.title}
                                            </h6>
                                        </div>
                                        <div className="d-flex flex-row-reverse mt-3">
                                            <Link to={`/news/${post.slug}`}
                                                className="btn bg-gradient-primary rounded-pill text-white fs-min-plus fw-bold my-2"
                                            >
                                                Đọc tiếp
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            {props.children}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default News