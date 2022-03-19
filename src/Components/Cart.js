import React from 'react'
import { Link } from "react-router-dom";
import { useState, useEffect } from "react"
import DetailProduct from './Detail_Product'
function Cart() {
    const [local,setLocalStorage] = useState(localStorage.getItem('countQuanity'));
    // const [count, setCount] = useState(0);
    useEffect(() => {
        setLocalStorage(localStorage.getItem('countQuanity'))
        console.log('render...')
        let aroundRed = document.querySelector(".quantities-cart")
        let qty = document.getElementById("soLuong_Cart")
        
        if (local >= 1) {
            console.log(local);
            qty.innerHTML = local
            aroundRed.classList.remove("d-none");
        } else {
            aroundRed.classList.add("d-none");
        }
    
    }, [local])
   

    return (
        <>
            <div className=" ">

                <Link to="/cart" className="btn-40 bg-white d-flex rounded-circle btn-cart">
                    <i className="fas fa-shopping-bag color-primary m-auto fs-4" />
                    <div className="quantities-cart  rounded-circle fs-min-mini d-flex">
                        <div className="m-auto" id="soLuong_Cart"  ></div>
                    </div>
                </Link>

            </div>
            
        </>
    )
}

export default Cart