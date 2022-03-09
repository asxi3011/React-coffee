import React from "react";

import { AiFillPlusCircle } from "react-icons/ai";
import { BsFillFileTextFill, BsDashCircleFill } from "react-icons/bs";
const Test = () => {
    return (

        <div className="pd-header">
            <div className="container">
                <div className="pd-w-200">
                    <div className="bd-product my-5">
                        <form name="product_Order" action="/addCart" method="post">
                            <div className="row">

                                <div className="col-6">
                                    <div className="details-image-info-product">
                                        <img src="https://product.hstatic.net/1000075078/product/tra-dao-cam-xa_668678_400x400_207c526c987c4026877ebae748c62afd_large.jpg" alt="" />
                                    </div>
                                    <div className="d-flex gap-3 justify-content-center">
                                        <div className="list-image-details-info-product mt-2 ">
                                            <div>
                                                <img src="https://product.hstatic.net/1000075078/product/tra-dao-cam-xa_668678_400x400_207c526c987c4026877ebae748c62afd_large.jpg" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-6">
                                    <h2 id="name_product" className="d-block price-size-show fw-bold"   >Chanh xã mật ong </h2>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div>
                                            <span id="details-price-product-show"
                                                className="details-price-prodcut">50000</span>
                                            <span id="details-price-product" className="details-price-prodcut"
                                                hidden></span>
                                        </div>
                                        <div className="quanity-product">
                                            <button id="btn_down" type="button"
                                                className="btn btn-circle-primary btn-circle-disable mx-2"><BsDashCircleFill
                                                class=" text-white"></BsDashCircleFill></button>
                                            <span className="mx-2" name="test" id="lbl_quanity">1</span>
                                            <button type="button" id="btn_up" class="mx-2 btn btn-circle-primary"><AiFillPlusCircle
                                                class="fas fa-plus text-white"></AiFillPlusCircle></button>
                                        </div>
                                    </div>

                                    <div>
                                        <div className="input-group mt-4">
                                            <div className="input-group-prepend">
                                                <div className="input-group-text">
                                                    <BsFillFileTextFill className="text-secondary  fs-4"
                                                    />
                                                </div>
                                            </div>
                                            <input type="text" className="form-control" id="inlineFormInputGroup"
                                                placeholder="Ghi chú cho món tại đây" />
                                        </div>
                                    </div>
                                    <div className="mt-4 bd-size">
                                        <div className="bg-border ">Chọn size (BẮT BUỘC)</div>
                                        <div className="">
                                            <div className="d-flex justify-content-evenly p-2">

                                                <div className="d-flex align-items-center gap-3">
                                                    <input className="form-check-input rad-primary" type="radio" name="sizePrice"
                                                    />
                                                    <div>
                                                        <label className="d-block" >L</label>
                                                        <label className="d-block price-size-show"
                                                        >50000VND </label>
                                                        <label className="price-size" hidden>s</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <button type="submit" className="btn btn-color-primary w-100 mt-4" id="btn_addToCart">
                                       
                                       - Thêm vào giỏ hàng
                                    </button>
                                    <input id="id_product" name="id_product" type="hidden" value="" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>


        </div>

    )
}

export default Test