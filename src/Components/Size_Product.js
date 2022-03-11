import React from "react";
const sizePrice = () => {
    const priceplus = 1000;
return(
<div className="mt-4 bd-size">
<div className="bg-border ">Chọn size (BẮT BUỘC)</div>
<div className="">
    <div className="d-flex justify-content-evenly p-2">

        <div className="d-flex align-items-center gap-3">
            <input className="form-check-input rad-primary" id="sizePrice" value={priceplus} type="radio" name="sizePrice"
            />
            <div>
                <label className="d-block" >L</label>
                <label className="d-block price-size-show"
                > {priceplus.toLocaleString('vi-VN')}đ</label>
                <label className="price-size" hidden>s</label>
            </div>
        </div>
    </div>
</div>
</div>
)}
export default sizePrice