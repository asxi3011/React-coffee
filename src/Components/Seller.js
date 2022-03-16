import React from 'react'
import { Link } from "react-router-dom";
import { useState, useEffect } from "react"
import axios from 'axios'


function Seller() {
    const [posts, setPost] = useState([])
    useEffect(() => {
        axios.get(`https://sever-coffeehouse.herokuapp.com/bestseller12`)
            .then((response) => {
                setPost(response.data.dataBestseller);
            });
    }, [])
    if (!posts) return null;

    return (
        <>
            {posts.map(post => (
                <div className="col-lg-2 col-md-4 col-sm-12 my-2">
                    <div className="border-product">
                        <Link to={`/product/${post.slug}/`} className="a-none text-dark">
                            <div className="">
                                <div>
                                    <img
                                        className="img-product"
                                        src={`https://sever-coffeehouse.herokuapp.com/uploads/${post.imageRepresent}`}
                                        alt=""
                                    />
                                </div>
                                <div className="preview-info-product">
                                    <h4 className="name-product fs-6 fw-bolder">
                                        {post.nameProduct}
                                    </h4>
                                    <div className="d-flex justify-content-between align-items-center mt-4">
                                        <div className="fs-6 price">
                                            {post.priceStandard}
                                        </div>
                                        <div className="fs-3">
                                            <i className="fas fa-plus-circle color-primary" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            ))}


        </>
    )
}

export default Seller