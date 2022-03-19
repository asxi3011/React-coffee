import { Link } from "react-router-dom";
import { React } from "react"
import Category from "./Category";
import PageNews from "./PageNews";
import CardProduct from "./CardProduct";
import Slider from "./Slider";
import NotFound from "./NotFound";

function Home({categorys,news,products}) {
    console.log("HomeCategorys",categorys);
    return (
        categorys ?
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
                                {categorys.map((category)=><Category category={category}/>)}                               
                            </div>
                        </div>
                        <div className="preview-Product mt-5">
                            <div className="row my-3">
                            {products.map((product)=> <CardProduct product={product}/>)}                                              
                            </div>
                        </div>
                        <div className="text-center">
                            <Link to="/product" className="a-none color-primary fs-6">
                                Xem tất cả <i className="fas fa-arrow-right" />
                            </Link>
                        </div>
                    </div>
                </div>
                <PageNews news={news}/>

            </div>
        </>
        : <NotFound/>
    )
}

export default Home