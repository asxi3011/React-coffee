import { Link } from "react-router-dom";
import { React } from "react"
import Category from "./Category";
import News from "./News";
import Seller from "./Seller";

function Home() {


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
                        <div className="preview-Menu">
                            <div className="text-center fs-3">
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

                                <Seller />

                            </div>
                        </div>
                        <div className="text-center">
                            <Link to="/product" className="a-none color-primary fs-6">
                                Xem tất cả <i className="fas fa-arrow-right" />
                            </Link>
                        </div>
                    </div>
                </div>
                <News
                    children={<div className="text-center">
                        <Link to="/news" className="a-none color-primary fs-6">
                            Xem tất cả <i className="fas fa-arrow-right" />
                        </Link>
                    </div>}
                />

            </div>
        </>
    )
}

export default Home