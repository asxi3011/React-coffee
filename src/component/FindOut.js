import React, { useEffect, useState } from 'react';
import './style.css'
import axios from 'axios';
import GetOder from './GetOder';

function FindOut({order}){
const [posts, setPost] = useState([])
  
    if (!posts) return null;
    console.log(order)


return(
    <div>
            <div className="container-fluid">   
        <div className="row mt-3">
        {order.map(data=>(
            <div className="d-flex justify-content-center my-5">
                
                <div className="col-6 p-4 rounded box-details-order">

                    <h3 className="text-center fw-bold">Chi tiết đơn hàng</h3>
                    <div>

                        <div className="d-flex justify-content-between">
                            <div>
                                <div className="my-2">
                                    <span className="fw-bold">Mã đơn hàng: </span>
                                    {data.idOrder}
                                </div>
                                <div className="my-2">
                                    {data.statusOrder}
                                </div>
                                <div className="my-2">
                                    {data.createdAt}
                                </div>
                            </div>
                            <div>
                                <div className="my-2">
                                {data.hotenOrder}
                                </div>
                                <div className="my-2">
                                {data.sdtOrder}
                                </div>
                                <div className="my-2">
                                {data.addressOrder}
                                </div>
                            </div>
                        </div>
                        <div id='appendListCategory'>
                            <h5>Giỏ hàng</h5>
                            <div className="line_bottom">   </div>
                 

                            <table className="table table-striped my-3 align-middle text-center table-text-form">
                                <thead>
                                    <tr>
                                    <th className="">STT</th>
                                    <th className="">tên sản phẩm</th>
                                    <th className="">số lượng</th>
                                    <th className="">Size</th>
                                    <th className="">Giá sản phẩm</th>
                                    <th className="">Ghi chú</th>
                                    <th>Tổng giá</th>
                                    </tr>
                                </thead>

                                <tbody>
                                <tr>
                                    <td className=""></td>
                                    <td className="">{data.ame_product}</td>
                                    <td className="">{data.quanityProduct}</td>
                                    <td>{data.sizeName}+({data.sizePrice})</td>
                                    <td>{data.currentPriceProduct}</td>
                                    <td>{data.note}</td>
                                    <td>{data.priceTotal} ₫</td>
                                    </tr>

                                </tbody> 

                            </table>
                            

                            <div className="d-flex justify-content-between my-2">
                                <div>
                                    Khuyễn mãi:
                                </div>
                                <div>
                                    {data.priceCoupon}
                                </div>

                            </div>
                            <div className="d-flex justify-content-between my-2">
                                <div>
                                    Phí ship:
                                </div>
                                <div>
                                    {data.priceCharge}
                                </div>

                            </div>
                            <div className="d-flex justify-content-between my-2">
                                <div className="color-primary fs-5 fw-bold">
                                    Thành Tiền:
                                    <div className="line_bottom"></div>
                                </div>
                                <div className="color-primary fs-5 fw-bold">
                                    {data.priceTotal}
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
             </div>
            ))}
        </div>
        

    </div>


    </div>
)

}
export default FindOut

