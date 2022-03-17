import React from 'react'
import { Link } from "react-router-dom";
import { useEffect } from "react"


function Cart() {
    useEffect(() => {
        const local = localStorage.getItem("quantity")
        const test = document.getElementById("soLuong_Cart")
        const test1 = document.querySelector(".quantities-cart")
        if (local >= 1) {
            test.innerHTML = local
            test1.classList.remove("d-none");
        } else {
            test1.classList.add("d-none");
        }
    })

    return (
        <>
            <div className=" ">
                <Link to="/cart" className="btn-40 bg-white d-flex rounded-circle btn-cart">
                    <i className="fas fa-shopping-bag color-primary m-auto fs-4" />
                    <div className="quantities-cart  rounded-circle fs-min-mini d-flex">
                        <div className="m-auto" id="soLuong_Cart">123</div>
                    </div>
                    <p id="test"></p>
                </Link>
            </div>
        </>
    )
}

export default Cart