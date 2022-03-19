import React from "react";
import { FaPlus } from "react-icons/fa";


function Menu(){
    return(
        <div className="preview-Menu">
                <div className="text-center fs-3">
                    <span>
                        <i className="fas fa-trophy color-primary fs-4"></i>
                    </span>
                    Sản phẩm từ Nhà
                </div>
                <div className="d-flex flex-wrap justify-content-center list-category pd-t-50 divTest">

                    <a href="banh-ngot" className="item-category a-none test12">
                        <div className="">
                            <div className="image-cateogry rounded-circle m-auto">
                                <img className="h-100" src="http://localhost:3030/uploads/1640072672666-1634628507831-BANHNGOT.png" alt=""/>
                            </div>
                            <div className="fs-6 text-center text-disable text-coffe my-2">
                                bánh ngọt
                            </div>
                        </div>
                    </a>
                    <a href="tra" className="item-category a-none test12">
                        <div className="">
                            <div className="image-cateogry rounded-circle m-auto">
                                <img className="h-100" src="http://localhost:3030/uploads/1640534892651-1634628507824-TEA.png" alt=""/>
                            </div>
                            <div className="fs-6 text-center text-disable text-coffe my-2">
                                trà
                            </div>
                        </div>
                    </a>
                    <a href="ca-phe" className="item-category a-none test12">
                        <div className="">
                            <div className="image-cateogry rounded-circle m-auto">
                                <img className="h-100" src="http://localhost:3030/uploads/1640072672657-1634628507821-COFFE.png" alt=""/>
                            </div>
                            <div className="fs-6 text-center text-disable text-coffe my-2">
                                cà phê
                            </div>
                        </div>
                    </a>
                    <a href="thuong-thuc-tai-nha-" className="item-category a-none test12">
                        <div className="">
                            <div className="image-cateogry rounded-circle m-auto">
                                <img className="h-100" src="http://localhost:3030/uploads/1640072672665-1634628507828-FOODHOME.png" alt=""/>
                            </div>
                            <div className="fs-6 text-center text-disable text-coffe my-2">
                                thưởng thức tại nhà 
                            </div>
                        </div>
                    </a>
                    <a href="da-xay" className="item-category a-none test12">
                        <div className="">
                            <div className="image-cateogry rounded-circle m-auto">
                                <img className="h-100" src="http://localhost:3030/uploads/1640072672664-1634628507827-DAXAY.png" alt=""/>
                            </div>
                            <div className="fs-6 text-center text-disable text-coffe my-2">
                                đá xay
                            </div>
                        </div>
                    </a>

                </div>
            </div>
        
    )
}
export default Menu


