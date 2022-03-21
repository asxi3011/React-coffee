
import React from "react";

import { useState, useEffect,useCallback } from 'react';
import {unmountComponentAtNode} from 'react-dom';
import ItemCart from './ItemCart'
import  useLayoutEffect  from "react";
import axios from 'axios';
import { BsFillFileTextFill } from "react-icons/bs";
import { FaPlus, FaMinus } from "react-icons/fa";
import { useParams } from "react-router-dom";
import GiaoHang from "./GiaoHang";
import ThanhToan from "./ThanhToan";
import $ from 'jquery';

function ShopingCart(){

  const [checked, setChecked] = useState({});  
  const [arrayP,setarrayP] = useState(JSON.parse(localStorage.getItem('arrayCart')))
  const countPlus = JSON.parse(localStorage.getItem('countQuanity') || 0)
  // arrayP.push(carts)
  console.log(arrayP)


  

    

  
  const sizeComponent = (sizes)=>{
    return(
        <div className="mt-4 bd-size">
                                <div className="bg-border ">Chọn size (BẮT BUỘC)</div>
                                <div className="">
                                    <div className="d-flex justify-content-evenly p-2">
                                        {sizes.map((size,index)=>
                                            <div key={index} className="d-flex align-items-center gap-3" >

                                                <input className="form-check-input rad-primary" id={`sizePrice${index}`} type="radio" name={size.name}
                                                checked={checked.name===size.name} value={size.value}   onChange={()=>{                                                                                                              
                                                        setChecked({name:size.name,value:size.value})
                                                    }}
                                                />
                                                <div>
                                                    <label htmlFor={`sizePrice${index}`} className="d-block" >{size.name}</label>
                                                    <label htmlFor={`sizePrice${index}`} className="d-block price-size-show"
                                                    >{Number(size.value).toLocaleString('vi-VN')} đ</label>
                                                    <label className="price-size" hidden>s</label>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
    )
} // Componet Size
  function thanhTien(){
    
  }
//  function renderModalProduct(name,description,price,quanity,size,img,note,id){
//     var a = "";
    
//     return `<div class="text-center fw-bold fs-6 my-3">
//           Sản phẩm
//       </div>
//       <div class="d-flex gap-3 align-items-center">
//           <img class="img-cart-modal" src="/uploads/${img}" alt="">
//           <div class="d-flex flex-grow-1 flex-column gap-3">
//               <div id="name_product" class="fw-bold">${name}</div>
//               <div>
//                 ${description}
//               </div>
//               <div class="d-flex justify-content-between align-items-center">
//                   <div id="details-price-product" class="">${price}</div>
//                   <div class="quanity-product">
//                                       <button id="btn_down" type="button" class="btn btn-circle-primary btn-circle-disable mx-2"><i class="fas fa-minus text-white"></i></button>
//                                       <span class="mx-2" name="test" id="lbl_quanity">${quanity}</span>
//                                       <button type="button" id="btn_up" class="mx-2 btn btn-circle-primary"><i class="fas fa-plus text-white"></i></button>
//                   </div> 
//               </div>
//           </div>
//       </div>
//       <div class="input-group my-3">
//                                       <div class="input-group-prepend">
//                                       <div class="input-group-text"><i class="fas fa-sticky-note fs-4 text-secondary"></i></div>
//                                       </div>
//                                       <input type="text" class="form-control" id="inlineFormInputGroup" placeholder="Ghi chú cho món tại đây" value="${note}">
//           </div>
//           <div class="mt-4 bd-size">
//                                   <div class="bg-border ">Chọn size (BẮT BUỘC)</div>
//                                   <div class=""> 
//                                       <div class="d-flex justify-content-evenly p-2">`+
                                     
//                                       sizeComponent(size)                                   
//                                     +`
//                                       </div>
//                                   </div>
//           </div>
//       <div class="text-center my-3">
//           <button type="submit" class="btn btn-color-primary w-100 mt-4" id="btn_addToCart">
//                                   <span id="price_Total" hidden>${price}</span>
//                                   <span id="price_Total_show">${price}</span> - Thêm vào giỏ hàng
//                               </button>
//                               <input id="id_product" name="id_product" type="hidden" value="${id}">
//       </div>`
//   }
  // const getProduct=(id)=>{
    
  //   console.log("123")
  //   axios.get(`https://sever-coffeehouse.herokuapp.com/getProduct?id=${id}`)
  //           .then(res => {
  //             console.log(res)
  //             renderModalProduct(res.data.nameProduct,"",3000,3,res.data.size,res.data.imageRepresent,"",res.data._id)
                
            
  //           })
            

  // }
  const handleRemove=(idProduct)=>{
    const newList=arrayP.filter((order)=>order.idProduct !== idProduct);
    setarrayP(newList);
    
  }
  const renderlist=(array)=>{
    console.log()
    return(
              <div className="row" id="listProductCart">
                {array.map((order,index)=>
                  <div key={index} className="col-12">
                        <div className="line-product d-flex align-items-center gap-2 my-2">
                          <div className="btn btn-edit-product-cart "  index={0}>
                            <i className="fas fa-pen color-primary" />
                          </div>
                          <div className="flex-grow-1">
                            <div className="fw-bold">
                              {order.countQuanity} x {order.name_product}
                            </div>
                            <div>
                              Size : {order.sizeName}
                            </div>
                            <div>
                            </div>
                            <div className="btn-delte-product-cart d-inline-block"  index={0}>
                              Xóa
                            </div>
                          </div>
                          <div>
                            {Number(order.priceTotal).toLocaleString("vi-VN",{style:"currency", currency:"VND"})}
                      
                          </div>
                        </div>
                      </div>
                )}
                    </div> 

    );
  }
  

  

  


  return (  
  
  
    <div className="pd-header">
      <div className="container">
        <div className="name2">
          <div className="mt-5 text-center fs-4">
            <i className="fas fa-file text-warning" />
            <span className="fw-bold">
              Xác nhận đơn hàng
            </span>
          </div>
          <div className="row my-5">
            <div className="col-6">
              <div className="pd-12">
              <div className="d-flex align-items-center py-3 header">
                  <span className="fw-bold fs-5">
                    Giao hàng
                    <img className="img-min" src="https://minio.thecoffeehouse.com/images/tch-web-order/Delivery2.png" alt="" />
                  </span>
                </div>
                  <GiaoHang/>
                <div className="d-flex align-items-center py-3 header">
                  <span className="fw-bold fs-5">
                    Phương thức thanh toán
                  </span>
                </div>
                <div className="line_bottom" />
                <ThanhToan/>
              </div>
              <div className="row my-5">
                <div className="col-6">
                  <div className="pd-12">
                  <div className="d-flex align-items-center py-3 header">
                      <span className="fw-bold fs-5">
                        Giao hàng
                        <img className="img-min" src="https://minio.thecoffeehouse.com/images/tch-web-order/Delivery2.png" alt="" />
                      </span>
                    </div>
                      <GiaoHang/>
                    <div className="d-flex align-items-center py-3 header">
                      <span className="fw-bold fs-5">
                        Phương thức thanh toán
                      </span>
                    </div>
                    <div className="line_bottom" />
                  <ThanhToan/>
                  </div>
                </div>
                <div className="col-6">
                    <div className="bd-cart">
                      <div>
                        <div className="d-flex justify-content-between align-items-center py-3 header">
                          <span className="fw-bold fs-5">
                            Các món đã chọn
                          </span>
                          <a href="/" className="btn btn-no-background a-none text-dark">
                            Thêm món
                          </a>
                        </div>
                        <div className="line_bottom">
                        </div>
                        <div className="row" id="listProductCart">
                          {arrayP.map((cart,index)=><ItemCart key={index} cart={cart}/>)}
                          </div>
                        <div className="fw-bold fs-5 py-2">
                          Tổng cộng
                        </div>
                        <div className="line_bottom" />
                        <div >
                          <div className="py-3 d-flex justify-content-between align-items-center bd-bottom">
                            <span >
                              Thành tiền
                            </span>
                            <span id="price_total" >
                            </span>
                          </div>
                          <div className="py-3 d-flex justify-content-between align-items-center bd-bottom">
                            <span >
                              Phí vận chuyển
                            </span>
                            <span id="price_charge_show" >  {Number(30000).toLocaleString("vi-VN",{style:"currency", currency:"VND"})}
                            </span>
                            <span id="price_charge"  hidden>30000</span>
                          </div>
                          <div className="py-3 d-flex justify-content-between align-items-center">
                            <div id="btn_show_modal_KM" className="color-primary pe-cursor">Khuyến mãi</div>
                            <div id="content-coupon" />
                          </div>
                          <div className="bg-getAll py-3">
                            <form action="/create_payment_url" name="create_payment_url" method="post">
                              <div className="d-flex align-items-center justify-content-between">
                                <div className="text-white">
                                  <div>Thành tiền</div>
                                  <div id="price_total_with_charge_show" className="fw-bold" />
                                  <input id="price_total_with_charge" name="priceTotal" className="fw-bold" hidden />
                                </div>
                                <button id="btn_Dat_Hang" type="submit" className="btn btn-light color-primary">
                                  Đặt hàng
                                </button>
                              </div>
                            </form> 
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>


      </div>
    </div>
  )
}

export default ShopingCart;
