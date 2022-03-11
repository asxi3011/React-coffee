import React from "react";
import ReactDOM from 'react-dom';
import  sizePrice from "./Size_Product";
import { useState } from 'react';
import { AiFillPlusCircle } from "react-icons/ai";
import { BsFillFileTextFill, BsDashCircleFill } from "react-icons/bs";
import { FaPlus, FaMinus } from "react-icons/fa";

const Test = () => {
    const [count, setCount] = useState(1);
    const price = 5000;
    
    return (

        <div className="pd-header">
            <div className="container">
                <div className="pd-w-200">
                    <div className="bd-product my-5">
                        <form name="product_Order" action="#" method="post">
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
                                    <p className="mt-4"> Một sự kết hợp tinh tế giữa vị đắng cà phê Espresso nguyên chất hòa quyện cùng vị sữa nóng ngọt ngào, bên trên là một lớp kem mỏng nhẹ tạo nên một tách cà phê hoàn hảo về hương vị lẫn nhãn quan.
                                    </p>
                                </div>

                                <div className="col-6">
                                    <h2 id="name_product" className="d-block price-size-show fw-bold"   >Chanh xã mật ong </h2>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div>
                                            <span id="details-price-product-show"
                                                className="details-price-prodcut">{price.toLocaleString('vi-VN')}đ</span>
                                            <span id="details-price-product" className="details-price-prodcut"
                                                hidden></span>
                                        </div>
                                        <div className="quanity-product">
                                            {count <= 1 ? <button id="btn_down" type="button" className="mx-2 btn btn-circle-primary btn-circle-disable" ><FaMinus
                                                className=" text-white"></FaMinus></button>

                                                : <button id="btn_down" type="button"
                                                    className="btn btn-circle-primary  mx-2" onClick={() => setCount(count - 1)}><FaMinus
                                                        className=" text-white"></FaMinus></button>}


                                            <span className="mx-2" name="test" id="lbl_quanity">{count}</span>

                                            <button type="button" id="btn_up" className="mx-2 btn btn-circle-primary" onClick={() => setCount(count + 1)}><FaPlus
                                                className="fas fa-plus text-white"></FaPlus></button>
                                        </div>
                                    </div>

                                    <div>
                                        <div className="input-group mt-4">
                                            <div className="input-group-prepend">
                                                <div className="input-group-text">
                                                    <BsFillFileTextFill className="text-secondary  fs-4"/>
                                                </div>
                                            </div>
                                            <input type="text" className="form-control" id="inlineFormInputGroup"
                                                placeholder="Ghi chú cho món tại đây" />
                                        </div>
                                    </div>
                                   
                                   <script type="text/babel">
                                 <div id="sizePrice"></div>
                                   </script>
                                    <button type="submit" className="btn btn-color-primary w-100 mt-4" id="btn_addToCart">

                                       
                                        {(price * count).toLocaleString('vi-VN')}đ - Thêm vào giỏ hàng
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
ReactDOM.render(<sizePrice/>,document.getElementById('sizePrice'))
export default Test