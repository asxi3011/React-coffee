
import React from "react";
import { useNavigate } from "react-router-dom"
import { useState, useEffect } from 'react';
import ItemCart from './ItemCart'
import axios from 'axios';
import Loading from "./Loading";
import ThanhToan from "./ThanhToan";
import { io } from "socket.io-client";



function ShopingCart({setLocalCount,coupon}){
  
  let navigate = useNavigate();
  let [loading, setLoading] = useState(false);
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
  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
  const validateCheckEmpty = (value)=>{
      return value.trim() !== "";
  }
  const validateInput = (iname,iadress,iphone,iemail)=>{
    return validateEmail(iemail) && validateCheckEmpty(iname) && validateCheckEmpty(iphone) && validateCheckEmpty(iadress);
  }
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
      return thanhTien-priceCoupon+30000; // 30k l?? ph?? ship (code c???ng);
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
    
    if(validateInput(name,address,phone,email)){
      setLoading(true);
      axios.post('https://sever-coffeehouse.herokuapp.com/order', {
        noteOrder: note,
        hotenOrder: name,
        emailOrder:email,
        sdtOrder: phone,
        emailOrder:email,
        addressOrder: address,
        priceCharge: 30000,
        priceCoupon: priceCoupon,
        nameCoupon: coupon,
        priceTotal: priceAll,
        listProductOrder: arrayP,
        payment: "Ti???n m???t",
      })
      .then(function (response) {
        clearCart();
        var idOrder = response.data.idOrder;
        const socket = io("https://sever-coffeehouse.herokuapp.com", { transports : ['websocket'] });
        socket.emit("don-hang-moi", response.data);
        axios.post('https://sever-coffeehouse.herokuapp.com/sendMail', {
            mail: email,
            address: address,
            priceTotal: priceAll,
            name: name,
            idOrder: idOrder,
        })
        .then(function (responseMail) {
          setLoading(false);
          alert("?????t h??ng th??nh c??ng ! Qu?? kh??ch vui l??ng ki???m tra email ????? bi???t ???????c id ????n h??ng v?? tra c???u th??ng tin !")
            localStorage.removeItem('arrayCart');
            localStorage.removeItem('countQuanity');
            navigate("/");
            setarrayP("");
            setLocalCount(0);

        })
    
      })
      .catch(function (error) {
        console.log(error);
      });
    }
    else{
      setLoading(false);
      alert("Vui long nh???p email v?? th??ng tin kh??ng ???????c ????? tr???ng")
    }
    
  }
  return (  
    <>
   
    

    <div className="pd-header">
      <div className="container">
        <div className="name2">
          <div className="mt-5 text-center fs-4">
            <i className="fas fa-file text-warning" />
            <span className="fw-bold">
              X??c nh???n ????n h??ng
            </span>
          </div>
              <div className="row my-5">
                <div className="col-6">
                  <div className="pd-12">
                  <div className="d-flex align-items-center py-3 header">
                      <span className="fw-bold fs-5">
                        Giao h??ng
                        <img className="img-min" src="https://minio.thecoffeehouse.com/images/tch-web-order/Delivery2.png" alt="" />
                      </span>
                    </div>
                    <div>
                        <div className="line_bottom" />
                              <input type="text" value={email} onChange={(e)=>{setEmail(e.target.value);console.log(e.target.value)}} name="emailCus" className="form-control input-text-address" placeholder="Email" required />
                              <input type="text" value={address} onChange={(e)=>{console.log(e.target.value);setAddress(e.target.value)}} name="addressCus" className="form-control input-text-address" placeholder="?????a ch???" required />
                              <input type="text" value={name} onChange={(e)=>setName(e.target.value)}name="nameCus" className="form-control input-text-address" placeholder="T??n ng?????i nh???n" required />
                              <input type="text" value={phone} onChange={(e)=>setPhone(e.target.value)}name="numberCus" className="form-control input-text-address" placeholder="S??? ??i???n tho???i" required />
                              <input type="text" value={note} onChange={(e)=>setNote(e.target.value)} name="noteCus" className="form-control input-text-address" placeholder="Th??m h?????ng d???n giao h??ng" />
                      </div>

                    <div className="d-flex align-items-center py-3 header">
                      <span className="fw-bold fs-5">
                        Ph????ng th???c thanh to??n
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
                            C??c m??n ???? ch???n
                          </span>
                          <a href="/" className="btn btn-no-background a-none text-dark">
                            Th??m m??n
                          </a>
                        </div>
                        <div className="line_bottom">
                        </div>
                        <div className="row" id="listProductCart">
                          {arrayP.map((cart,index)=><ItemCart key={index} setLocalCount={setLocalCount} setarrayP={setarrayP} index={index} cart={cart} handleRemove={handleRemove}/>)}
                          </div>
                        <div className="fw-bold fs-5 py-2">
                          T???ng c???ng
                        </div>
                        <div className="line_bottom" />
                        <div >
                          <div className="py-3 d-flex justify-content-between align-items-center bd-bottom">
                            <span >
                              Th??nh ti???n
                            </span>
                            <span id="price_total" >
                                {Number(getThanhTien(arrayP)).toLocaleString("vi-VN",{style:"currency", currency:"VND"})}
                            </span>
                          </div>
                          <div className="py-3 d-flex justify-content-between align-items-center bd-bottom">
                            <span >
                              Ph?? v???n chuy???n
                            </span>
                            <span id="price_charge_show" >  {Number(30000).toLocaleString("vi-VN",{style:"currency", currency:"VND"})}
                            </span>
                            <span id="price_charge"  hidden>30000</span>
                          </div>
                          <div className="py-3 d-flex justify-content-between align-items-center">
                            <div id="btn_show_modal_KM" className="color-primary pe-cursor">Khuy???n m??i</div>
                            <div id="content-coupon">
                                {(coupon ==="" || coupon === null) ? "" : `${coupon}(${priceCoupon.toLocaleString("vi-VN",{style:"currency", currency:"VND"})})`}
                            </div>
                          </div>
                          <div className="bg-getAll py-3">
                            
                              <div className="d-flex align-items-center justify-content-between">
                                <div className="text-white">
                                  <div>Th??nh ti???n</div>
                                  <div id="price_total_with_charge_show" className="fw-bold" >{priceAll.toLocaleString("vi-VN",{style:"currency", currency:"VND"})}</div>
                                  <input id="price_total_with_charge" name="priceTotal" className="fw-bold" hidden />
                                </div>
                                <button onClick={()=>{setLoading(true);redirectOnline()}} className="btn btn-light color-primary">
                                  ?????t h??ng
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
         
    </div>
    <Loading status={loading}/>
   
    </>
    
    
  )
}

export default ShopingCart;
