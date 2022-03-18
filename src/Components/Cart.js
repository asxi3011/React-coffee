import React from 'react'
import { Link } from "react-router-dom";
import useState from 'react';
import { useEffect } from "react"
import ThongBao from './ThongBao';
import ShopingCart from './ShopingCart';
function Cart() {
    const local = localStorage.getItem("countQuanity")

    
    // useEffect(() => {
    //     const test = document.getElementById("soLuong_Cart")
    //     const test1 = document.querySelector(".quantities-cart")
    //     if (local >= 1) {
    //         test.innerHTML = local
    //         test1.classList.remove("d-none");



    //     } else {
    //         <ThongBao/>
    //     }
    // },[local])

    return (
        <>
            <div className=" ">
                <Link to="/cart" className="btn-40 bg-white d-flex rounded-circle btn-cart">
                    <i className="fas fa-shopping-bag color-primary m-auto fs-4" />
                    <div className="quantities-cart  rounded-circle fs-min-mini d-flex">
                        <div className="m-auto" id="soLuong_Cart"  >{local}</div>
                    </div>
                    <p id="test"></p>
                </Link>
            </div>
            
        </>
    )
}

export default Cart