import React, {  useState } from 'react';
import './style.css'
import axios from 'axios';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

function FindOut(){
    

    // const onClickSessions = () => {
    //     const arrayO = JSON.parse(localStorage.getItem('arrayOder')) || [];  
    //     arrayO.push(oder)
    //     localStorage.setItem('arrayOder',JSON.stringify(arrayO))
     
   
    //     setNote('');
    // }


    // const [oder,setOder]=useState([])
    // const [idOrders, setidOrders] = useState([])
    

    // useEffect(()=>{
    //     setOder( {

    //         idOrder:idOrders,

    //     })
    // },[]) 

    // useEffect(()=>{
    //     axios.get(`https://sever-coffeehouse.herokuapp.com/getOrder?id=16409277841815935`)
    //     .then(res =>{

    //             setidOrders(res.data.idOrder)

                // setdata(res.data)

                    // set_id(res.data._id
                    
                    // setidOrder(res.data.idOrder)
                    // console.log(res.data)
                //     setpriceTotal(res.data.priceTotal)
                //     setpriceCharge(res.data.priceCharge)
                //     setnoteOder(res.data.noteOrder)
                //     setstatusOrder(res.data.statusOder)
                //     setaddressOrder(res.data.addressOrder)
                //     sethotenOrder(res.data.hotenOrder)
                //     setsdtOrder(res.data.sdtOrder)


                //     setlistProductCart(res.data.listProductCart)

                //         setidProductCart(res.data.listProductCart.idProduct)
                //         setpriceTotalCart(res.data.listProductCart.priceTotal)
                //         setcurrentPriceProductCart(res.data.listProductCart.currentPriceProduct)
                //         setsizeNameCart(res.data.listProductCart.sizeName)
                //         setquanityProductCart(res.data.listProductCart.quanityProduct)
                //         setname_productCart(res.data.listProductCart.name_product)
                //         setnoteCart(res.data.listProductCart.note)

                //     setpriceCoupon(res.data.priceCoupon)
                //     setpayment(res.data.payment)
                //     setdeleted(res.data.deleted)
                //     setcreatedAt(res.data.createdAt)
                //     setupdatedAt(res.data.updatedAt)
                //     set__v(res.data.__v)

                // setcartProduct(res.data.cartProduct)
                //     setidProduct(res.data.cartProduct.idProduct)
                //     setpriceTotalProduct(res.data.cartProduct.priceTotal)
                //     setcurrentPriceProduct(res.data.cartProduct.currentPriceProduct)
                //     setsizeNameProduct(res.data.cartProduct.sizeName)
                //     setsizePriceProduct(res.data.cartProduct.sizePrice)
                //     setquanityProduct(res.data.cartProduct.quanityProduct)
                //     setname_product(res.data.cartProduct.name_product)
                //     setnoteProduct(res.data.cartProduct.note)

    //         })
    // })


    // const [posts, setPost] = useState([])
    // useEffect(() => {
    //     axios.get(`https://sever-coffeehouse.herokuapp.com/getOrder?id=16409277841815935`)
    //         .then((response) => {
    //             setPost(response.data.dataOders);

    //             console.log(response)
    //         });
    // }, [])


   

    


    
   

    
    return(
        <div className="row mt-3">
        <div className="d-flex justify-content-center my-5">
            <div className="col-6 p-4 rounded box-details-order">

                <h3 className="text-center fw-bold">Chi tiết đơn hàng</h3>
                <div>

                    <div className="d-flex justify-content-between">
                        <div>
                            <div className="my-2">
                                <span className="fw-bold">Mã đơn hàng: </span>16409277841815935
                            </div>
                            <div className="my-2">
                                Trạng thái: done
                            </div>
                            <div className="my-2">
                                Ngày đặt: 12/31/2021, 12:16:24 PM
                            </div>
                        </div>
                        <div>
                            <div className="my-2">
                                Khách Hàng: Đình Đô
                            </div>
                            <div className="my-2">
                                SĐT: 0909090
                            </div>
                            <div className="my-2">
                                Địa chỉ: 753/16/21/5 tỉnh lộ
                            </div>
                        </div>
                    </div>
                    <div id='appendListCategory'>
                        <h5>Giỏ hàng</h5>
                        <div className="line_bottom"></div>
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
                                <td className="">1</td>
                                <td className="">mousse passion cheese</td>
                                <td className="">1</td>
                                <td>M(+0)</td>
                                <td>29,000 ₫</td>
                                <td></td>
                                <td>29,000 ₫</td>
                                </tr>

                            </tbody> 

                        </table>

                        <div className="d-flex justify-content-between my-2">
                            <div>
                                Khuyễn mãi:
                            </div>
                            <div>
                                0 ₫
                            </div>

                        </div>
                        <div className="d-flex justify-content-between my-2">
                            <div>
                                Phí ship:
                            </div>
                            <div>
                                30,000 ₫
                            </div>

                        </div>
                        <div className="d-flex justify-content-between my-2">
                            <div className="color-primary fs-5 fw-bold">
                                Thành Tiền:
                                <div className="line_bottom"></div>
                            </div>
                            <div className="color-primary fs-5 fw-bold">
                                59,000 ₫
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
   
  
    // <div>
    // <div classNameName="container-fluid">   
    //     <div classNameName="row mt-3">
          
    //     {/* const newId = {props.dataFromParent} */}
        
    //     {Order.map(post=>(
    //         <div key= {post.idOrder} classNameName="d-flex justify-content-center my-5">
              
                
    //             <div classNameName="col-6 p-4 rounded box-details-order">

    //                 <h3 classNameName="text-center fw-bold">Chi tiết đơn hàng</h3>
    //                 <div>

    //                     <div classNameName="d-flex justify-content-between">
    //                         <div>
    //                             <div classNameName="my-2">
    //                                 <span classNameName="fw-bold">Mã đơn hàng: </span>
    //                                 {post.idOrder}
    //                             </div>
    //                             <div classNameName="my-2">
    //                                 {post.statusOder}
    //                             </div>
    //                             <div classNameName="my-2">
    //                                 {post.createdAt}
    //                             </div>
    //                         </div>
    //                         <div>
    //                             <div classNameName="my-2">
    //                             {post.hotenOrder}
    //                             </div>
    //                             <div classNameName="my-2">
    //                             {post.sdtOrder}
    //                             </div>
    //                             <div classNameName="my-2">
    //                             {post.addressOrder}
    //                             </div>
    //                         </div>
    //                     </div>
    //                     <div id='appendListCategory'>
    //                         <h5>Giỏ hàng</h5>
    //                         <div classNameName="line_bottom">   </div>
                 

                            // <table classNameName="table table-striped my-3 align-middle text-center table-text-form">
                            //     <thead>
                            //         <tr>
                            //         <th classNameName="">STT</th>
                            //         <th classNameName="">tên sản phẩm</th>
                            //         <th classNameName="">số lượng</th>
                            //         <th classNameName="">Size</th>
                            //         <th classNameName="">Giá sản phẩm</th>
                            //         <th classNameName="">Ghi chú</th>
                            //         <th>Tổng giá</th>
                            //         </tr>
                            //     </thead>

                            //     <tbody>
                            //     <tr>
                            //         <td classNameName=""></td>
                            //         <td classNameName="">{post.cartProduct.name_product}</td>
                            //         <td classNameName="">{post.cartProduct.quanityProduct}</td>
                            //         <td>{post.cartProduct.sizeName}+({post.cartProduct.sizePrice})</td>
                            //         <td>{post.cartProduct.currentPriceProducttoLocaleString('vi-VN', {style:'currency', currency:'VND'})}</td>
                            //         <td>{post.cartProduct.note}</td>
                            //         <td>{post.cartProduct.priceTotaltoLocaleString('vi-VN', {style:'currency', currency:'VND'})} ₫</td>
                            //         </tr>

                            //     </tbody> 

    //                         </table>
                            

    //                         <div classNameName="d-flex justify-content-between my-2">
    //                             <div>
    //                                 Khuyễn mãi:
    //                             </div>
    //                             <div>
    //                                 {post.priceCoupon.toLocaleString('vi-VN', {style:'currency', currency:'VND'})}
    //                             </div>

    //                         </div>
    //                         <div classNameName="d-flex justify-content-between my-2">
    //                             <div>
    //                                 Phí ship:
    //                             </div>
    //                             <div>
    //                                 {post.priceCharge.toLocaleString('vi-VN', {style:'currency', currency:'VND'})}
    //                             </div>

    //                         </div>
    //                         <div classNameName="d-flex justify-content-between my-2">
    //                             <div classNameName="color-primary fs-5 fw-bold">
    //                                 Thành Tiền:
    //                                 <div classNameName="line_bottom"></div>
    //                             </div>
    //                             <div classNameName="color-primary fs-5 fw-bold">
    //                                 {post.priceTotal.toLocaleString('vi-VN', {style:'currency', currency:'VND'})}
    //                             </div>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </div> 
    //          </div>
    //          ))} 
    //     </div>
        

    // </div>


    // </div>
)

}
export default FindOut

