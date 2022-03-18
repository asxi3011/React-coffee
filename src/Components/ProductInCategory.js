
import {React, useState, useLayoutEffect } from "react"
import axios from 'axios'
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';
import Category from "./Category"
import Slider from "./Slider"
import ListProduct from "./ListProduct"
import NotFound from "./NotFound"
function ProductInCategory() {
    const { slug } = useParams();
    const [posts, setPost] = useState([])

    useLayoutEffect(() => {
        axios.get(`https://sever-coffeehouse.herokuapp.com/getProductsInCategory/${slug}`)
            .then((response) => {
                console.log(slug); 
                setPost(response.data);
        });
    }, [slug])
        return (
            <>
                <div className="pd-header">
                    <Slider/>
                    <div className="container-fluid">
                        <div className="pd-w-100 section-Chapter">
                            <div className="preview-Menu">
                                <div className="text-center fs-3 mb-3">
                                    <span>
                                        <i className="fas fa-trophy color-primary fs-4" />
                                    </span>
                                    Sản phẩm từ Nhà
                                </div>
                                 <div className="d-flex flex-wrap justify-content-center list-category pd-t-50 divTest">
                                    <Category />
                                </div> 
                            </div> 
                            <div className="preview-Product mt-5">
                                <div className="row my-3">
                                    <div className="container-fluid">
                                        <div className="pd-w-100 section-Chapter">
                                            <div className="text-center fs-3">
                                                <i className="fas fa-newspaper fs-4 color-primary" /> Danh mục sản phẩm
                                            </div>
                                            {posts.status === "success" ? <ListProduct posts={posts}/> : <NotFound/>}                                         
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
}

export default ProductInCategory

