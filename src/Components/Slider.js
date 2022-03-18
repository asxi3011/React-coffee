
import { Link } from "react-router-dom";
import { React,memo } from "react"

function Slider(){
    console.log("Xuất Slider");
    return(   <div className=" bg-slider  container-fluid">
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
</div>)
}

export default memo(Slider)