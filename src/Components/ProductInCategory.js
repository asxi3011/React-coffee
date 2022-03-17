
import { useState, useEffect } from "react"
import axios from 'axios'
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';
import Category from "./Category"
function ProductInCategory() {
    const { slug } = useParams();
    const [posts, setPost] = useState([])


    useEffect(() => {
        axios.get(`https://sever-coffeehouse.herokuapp.com/getProductsInCategory/${slug}`)
            .then((response) => {
                setPost(response.data);
            });
    }, [])
    if (!posts) return null;

    console.log(posts)
    if (posts.status == 'success') {
        return (
            <>
                <div className="pd-header">
                    <div className=" bg-slider  container-fluid">
                        <div className="pd-w-100">
                            <div className="slider-home">
                                <div
                                    id="carouselExampleIndicators"
                                    className="carousel slide"
                                    data-bs-ride="carousel"
                                >
                                    <div className="carousel-inner">
                                        <Link to="" className="carousel-item active">
                                            <img
                                                src="https://minio.thecoffeehouse.com/image/admin/BANNERWEB(3)_728110.jpg"
                                                className="d-block w-100"
                                                alt="..."
                                            />
                                        </Link>
                                        <Link to="" className="carousel-item">
                                            <img
                                                src="https://minio.thecoffeehouse.com/image/admin/bannerhomeWEB-Caphetainha_409405.jpg"
                                                className="d-block w-100"
                                                alt="..."
                                            />
                                        </Link>
                                        <Link to="" className="carousel-item">
                                            <img
                                                src="https://minio.thecoffeehouse.com/image/admin/WEB-bannehome-TUNGTANG_778598.jpg"
                                                className="d-block w-100"
                                                alt="..."
                                            />
                                        </Link>
                                    </div>
                                    <div className="posittion-slider">
                                        <div className="carousel-indicators">
                                            <button
                                                type="button"
                                                data-bs-target="#carouselExampleIndicators"
                                                data-bs-slide-to={0}
                                                className="active"
                                                aria-current="true"
                                                aria-label="Slide 1"
                                            />
                                            <button
                                                type="button"
                                                data-bs-target="#carouselExampleIndicators"
                                                data-bs-slide-to={1}
                                                aria-label="Slide 2"
                                            />
                                            <button
                                                type="button"
                                                data-bs-target="#carouselExampleIndicators"
                                                data-bs-slide-to={2}
                                                aria-label="Slide 3"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid">
                        <div className="pd-w-100 section-Chapter">
                            {/* <div className="preview-Menu">
                                <div className="text-center fs-3">
                                    <span>
                                        <i className="fas fa-trophy color-primary fs-4" />
                                    </span>
                                    Sản phẩm từ Nhà
                                </div>
                                 <div className="d-flex flex-wrap justify-content-center list-category pd-t-50 divTest">
                                    <Category />
                                </div> 
                            </div> */}
                            <div className="preview-Product mt-5">
                                <div className="row my-3">
                                    <div className="container-fluid">
                                        <div className="pd-w-100 section-Chapter">
                                            <div className="text-center fs-3">
                                                <i className="fas fa-newspaper fs-4 color-primary" /> Danh mục sản phẩm
                                            </div>
                                            <div className="preview-News mt-5">
                                                <div className="row my-3">
                                                    {posts.dataProducts.map(post => (
                                                        <div key={post._id} className="col-lg-2 col-md-4 col-sm-12 my-2">
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
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    } else {
        return (
            <>
                <div className="container-fluid">
                    <div className="pd-w-100 section-Chapter">
                        <div className="preview-News mt-5">
                            <div className="row my-3">
                                <div className="col-lg-12 col-md-4 col-sm-12 my-2">

                                    <div className="">
                                        <div>
                                            <img
                                                className="bd-rad-20"
                                                src={'https://cdn.dribbble.com/users/992274/screenshots/7392790/media/95483df50a0a3324c4cf9ccb1094b825.jpg?compress=1&resize=800x600'}
                                                alt=""
                                            />
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

}

export default ProductInCategory

