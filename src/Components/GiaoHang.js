import { React, useState} from "react"
import { Link } from "react-router-dom";
export default function GiaoHang(){
return (
    <div>
        <div className="line_bottom" />
              <input type="text" name="addressCus" className="form-control input-text-address" placeholder="Địa chỉ" required />
              <input type="text" name="nameCus" className="form-control input-text-address" placeholder="Tên người nhận" required />
              <input type="text" name="numberCus" className="form-control input-text-address" placeholder="Số điện thoại" required />
              <input type="text" name="emailCus" className="form-control input-text-address" placeholder="Email" required />
              <input type="text" name="noteCus" className="form-control input-text-address" placeholder="Thêm hướng dẫn giao hàng" />
    </div>
    );    
}