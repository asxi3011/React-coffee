import { React, useState} from "react"
import { Link } from "react-router-dom";
export default function ThanhToan(){
return (
    <div>
    <div className="form-check my-3 fs-5">
    <input className="form-check-input rad-primary" type="radio" name="radPayment" defaultValue="Tiền mặt" id="radPayment" defaultChecked />
    <label className="form-check-label" htmlFor="radPayment">
      <i className="fas fa-money-bill text-success" /> Tiền mặt
    </label>
  </div>
  <div className="form-check my-3 fs-5">
    <input className="form-check-input rad-primary" type="radio" name="radPayment" defaultValue="VN Pay" id="radPaymentOnline" />
    <label className="form-check-label" htmlFor="radPaymentOnline">
      <i className="fas fa-money-check text-warning" /> VN Pay
    </label>
  </div>
  </div>
    );    
}