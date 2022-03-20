
import React,{useState} from 'react';


function ItemCart({cart}){
    const [show,setShow] = useState(true);
    const handleDelelte = ()=>{
       
        setShow(false);
    }
    return(
        show ?
            <div className="col-12 ItemCart">
                  <div className="line-product d-flex align-items-center gap-2 my-2">
                    <div className="btn btn-edit-product-cart ">
                      <i className="fas fa-pen color-primary" />
                    </div>
                    <div className="flex-grow-1">
                      <div className="fw-bold">
                        {cart.countQuanity} x {cart.name_product}
                      </div>
                      <div>
                        Size : {cart.sizeName}
                      </div>
                      <div>
                      </div>
                      <div onClick={handleDelelte} className="btn-delte-product-cart d-inline-block">
                        Xóa
                      </div>
                    </div>
                    <div>
                      {Number(cart.priceTotal).toLocaleString("vi-VN",{style:"currency", currency:"VND"})}           
                    </div>
                  </div>
            </div>
        :<></>
    )
}
export default ItemCart