
import React from "react";

import { useState, useEffect } from 'react';

import ItemCart from './ItemCart'
import axios from 'axios';

import ThanhToan from "./ThanhToan";

import { io } from "https://cdn.socket.io/4.3.2/socket.io.esm.min.js";
import { Alert } from "bootstrap";


function ShopingCart({setLocalCount,coupon}){
  
  const [arrayP,setarrayP] = useState(JSON.parse(localStorage.getItem('arrayCart')));
  const [name,setName] = useState('');
  const [email,setEmail] = useState(''); 
  const [phone,setPhone] = useState('');
  const [address,setAddress] = useState('');
  const [note,setNote] = useState('');
  const [priceTotal,setPriceTotal] = useState(()=>{
    return arrayP.reduce((preCount,item)=>preCount+item.priceTotal,0);
  })
  const [priceCoupon,setPriceCoupon] = useState(getPriceCoupon(priceTotal,coupon));
  const [priceAll,setPriceAll] = useState(getTotalWithCoupon(priceTotal,priceCoupon));
  useEffect(()=>{
    const priceTotalNow = getThanhTien(arrayP);
    const priceCouponNow = getPriceCoupon(priceTotalNow,coupon)
    setPriceCoupon(priceCouponNow);
    setPriceAll(getTotalWithCoupon(priceTotalNow,priceCouponNow))
    setLocalCount(getCountArray(arrayP));
  },[coupon,priceTotal,arrayP])

  function clearCart() {
    sessionStorage.removeItem("arrayCart");
    sessionStorage.removeItem("countQuanity");
}
  function getThanhTien(array){
    return array.reduce((preCount,item)=>preCount+item.priceTotal,0);
  }
  function getTotalWithCoupon(thanhTien,priceCoupon){
    console.log("all",thanhTien);
    console.log("Coupon",priceCoupon);
      return thanhTien-priceCoupon+30000; // 30k là phí ship (code cứng);
  }
  function getPriceCoupon(thanhtien,coupon){
    switch(coupon){
      case "30phantram":
        return Number(thanhtien)*0.3;
      case "19tuoixanh":
        return 19000;
      default:
        return 0;
    }
  }
  const getCountArray=(array)=>{
    return array.reduce((preCount,item)=>preCount+item.quanityProduct,0);
  }
  const handleRemove=(index)=>{
    const newList=arrayP.filter((order,indexOrder)=>indexOrder !== index);
    const testNum = getCountArray(newList);
    localStorage.setItem('arrayCart',JSON.stringify(newList));
    localStorage.setItem('countQuanity',JSON.stringify(testNum));
    const thanhtien = getThanhTien(newList);
    const priceCoupon = getPriceCoupon(thanhtien,coupon);
    const priceAll = getTotalWithCoupon(thanhtien,priceCoupon);
    setarrayP(newList);
    setPriceTotal(thanhtien);
    setPriceCoupon(priceCoupon);
    setPriceAll(priceAll);
    setLocalCount(testNum);
  }
  
  const redirectOnline=()=>{
     
      axios.post('https://sever-coffeehouse.herokuapp.com/order', {
        noteOrder: note,
        hotenOrder: name,
        sdtOrder: phone,
        addressOrder: address,
        priceCharge: 30000,
        priceCoupon: priceCoupon,
        nameCoupon: coupon,
        priceTotal: priceTotal,
        listProductOrder: arrayP,
        payment: "Tiền mặt",
      })
      .then(function (response) {
        clearCart();
        var idOrder = response.data.idOrder;
        const socket = io("https://sever-coffeehouse.herokuapp.com", { transports : ['websocket'] });
        socket.emit("don-hang-moi", response.data);
        
        axios.post('https://sever-coffeehouse.herokuapp.com/sendMail', {
            mail: email,
            address: address,
            priceTotal: priceTotal,
            name: name,
            idOrder: idOrder,
        })
        .then(function (responseMail) {
        
            localStorage.removeItem('arrayCart');
            localStorage.removeItem('countQuanity');
            setarrayP("");
            setLocalCount(0);
            console.log("Mail",responseMail);
            console.log("Gửi thành công");
        })
    
      })
      .catch(function (error) {
        console.log(error);
      });
    
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
                    <div>
                        <div className="line_bottom" />
                              <input type="text" value={address} onChange={(e)=>{console.log(e.target.value);setAddress(e.target.value)}} name="addressCus" className="form-control input-text-address" placeholder="Địa chỉ" required />
                              <input type="text" value={name} onChange={(e)=>setName(e.target.value)}name="nameCus" className="form-control input-text-address" placeholder="Tên người nhận" required />
                              <input type="text" value={phone} onChange={(e)=>setPhone(e.target.value)}name="numberCus" className="form-control input-text-address" placeholder="Số điện thoại" required />
                              <input type="text" value={email} onChange={(e)=>{setEmail(e.target.value)}} name="emailCus" className="form-control input-text-address" placeholder="Email" required />
                              <input type="text" value={note} onChange={(e)=>setNote(e.target.value)} name="noteCus" className="form-control input-text-address" placeholder="Thêm hướng dẫn giao hàng" />
                      </div>

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
                          {arrayP.map((cart,index)=><ItemCart key={index} setLocalCount={setLocalCount} setarrayP={setarrayP} index={index} cart={cart} handleRemove={handleRemove}/>)}
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
                                {Number(getThanhTien(arrayP)).toLocaleString("vi-VN",{style:"currency", currency:"VND"})}
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
                            <div id="content-coupon">
                                {(coupon ==="" || coupon === null) ? "" : `${coupon}(${priceCoupon.toLocaleString("vi-VN",{style:"currency", currency:"VND"})})`}
                            </div>
                          </div>
                          <div className="bg-getAll py-3">
                            
                              <div className="d-flex align-items-center justify-content-between">
                                <div className="text-white">
                                  <div>Thành tiền</div>
                                  <div id="price_total_with_charge_show" className="fw-bold" >{priceAll.toLocaleString("vi-VN",{style:"currency", currency:"VND"})}</div>
                                  <input id="price_total_with_charge" name="priceTotal" className="fw-bold" hidden />
                                </div>
                                <button onClick={redirectOnline}className="btn btn-light color-primary">
                                  Đặt hàng
                                </button>
                              </div>
                        
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
          </div>
          <div className="modal fade" id="modalHappy">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content modal-cart d-flex">
                    <div className="p-3 ">
                        <div className="m-auto text-white fs-3 text-center">
                            <img className="img-50 img-rdus-4"
                                src="https://image.freepik.com/free-vector/cute-monkey-astronaut-floating-cartoon-vector-icon-illustration-animal-technology-icon-concept-isolated-premium-vector-flat-cartoon-style_138676-3519.jpg"
                                alt=""/>
                        </div>
                        <div className="text-center fw-bold fs-4 my-3">
                            Quý khách Đặt hàng thành công.
                            <br/>
                            Vui lòng kiểm tra lại email
                        </div>
                        <div className="text-center my-3">
                            <button id="btn_comeback" className="btn btn-modal-cart fw-bold" data-bs-dismiss="modal"> Trở lại trang
                                chủ </button>
                        </div>
                    </div>
                </div>
            </div>
            </div>

        <div className="modal fade" id="modalLoading" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
            aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content modal-loading d-flex">
                    <div className="p-3 ">
                        <div className="d-flex justify-content-center">
                            <div className="spinner-border spinner-center color-primary-light" role="status">
                                <span className="sr-only">Loading...</span>
                            </div>
                            <div className="mt-5 fw-bold color-primary-light fs-5">
                                Loading...
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
