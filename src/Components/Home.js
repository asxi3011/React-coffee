import { Link } from "react-router-dom";
import { React } from "react"
import Category from "./Category";
import News from "./News";
import Seller from "./Seller";
import Slider from "./Slider";

function Home() {

    return (
        <>
            <div className="pd-header">
                <Slider/>
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
                                <Category/>
                                
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