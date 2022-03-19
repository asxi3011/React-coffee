import React from 'react';
import './style.css'
import GetOder from './GetOder';

function NotFound(){
    return(
   
    <div className="container-fluid">
    <div className="row">       
    </div>
    <div className="row mt-3">
        <div className="d-flex justify-content-center my-5">
                    <div id='appendListCategory'>
                        <div className="col-12 p-4 rounded text-center">
                            <div>Chúng tôi không tìm thấy đơn hàng của bạn. Mã đơn hàng không hợp lệ hoặc đã hết hạn. Vui lòng kiểm tra lại mã đơn hàng bạn đã nhập.</div>
                            <img className="img-getOrder"
                                src="https://image.freepik.com/free-vector/design-thinking-concept-illustration_114360-3330.jpg"
                                alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>

     
      
  
     
    )
}
export default NotFound;