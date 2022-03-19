import React,{useState,useEffect} from 'react'

function Reply({Order}){
    const [message,setMessage] = useState('Theo dõi đơn hàng của bạn bằng cách nhập mã đơn hàng vào mục phía trên.');
    const messageFail = `Chúng tôi không tìm thấy đơn hàng của bạn. Mã đơn hàng không hợp lệ vui lòng hoặc đã hết hạn. 
    Vui lòng kiểm tra lại mã đơn hàng`
    useEffect(()=>{
        console.log(Order);
        if(Order.status===undefined){
            setMessage("Theo dõi đơn hàng của bạn bằng cách nhập mã đơn hàng vào mục phía trên.");
        }else{
            Order.status==="success" ? setMessage("Thanh2 cong6") : setMessage(messageFail);
        }
    },[Order])
    const InfoReply = ()=>{
        return(
            <div className="row mt-3">
            <div className="d-flex justify-content-center my-5">
                <div className="col-6 p-4 rounded box-details-order">
    
                    <h3 className="text-center fw-bold">Chi tiết đơn hàng</h3>
                    <div>
    
                        <div className="d-flex justify-content-between">
                            <div>
                                <div className="my-2">
                                    <span className="fw-bold">Mã đơn hàng: </span>{Order.data.idOrder}
                                </div>
                                <div className="my-2">
                                    {Order.data.status}
                                </div>
                                <div className="my-2">
                                Ngày: {Date(Order.data.createdAt).toLocaleString("vi-VN")}
                                </div>
                            </div>
                            <div>
                                <div className="my-2">
                                    Khách Hàng: {Order.data.hotenOrder}
                                </div>
                                <div className="my-2">
                                    SĐT:  {Order.data.sdtOrder}
                                </div>
                                <div className="my-2">
                                    Địa chỉ:  {Order.data.addressOrder}
                                </div>
                            </div>
                        </div>
                        <div id='appendListCategory'>
                            <h5>Giỏ hàng</h5>
                            <div className="line_bottom"></div>
                            <table className="table table-striped my-3 align-middle text-center table-text-form">
                                <thead>
                                <tr>
                                    <th className="">STT</th>
                                    <th className="">tên sản phẩm</th>
                                    <th className="">số lượng</th>
                                    <th className="">Size</th>
                                    <th className="">Giá sản phẩm</th>
                                    <th className="">Ghi chú</th>
                                    <th>Tổng giá</th>
                                    </tr>
                                </thead>
                                {Order.cartProduct.map((od,index)=>
                                      <tbody>
                                      <tr>
                                      <td className="">{index+1}</td>
                                      <td className="">{od.name_product}</td>
                                      <td className="">{od.quanityProduct}</td>
                                      <td>{od.name_product}</td>
                                      <td>{od.sizeName}(+{od.sizePrice.toLocaleString()})</td>
                                      <td>{od.note}</td>
                                      <td>{od.priceTotal.toLocaleString()}</td>
                                      </tr>
      
                                  </tbody> 
      
                                )}
                              
                            </table>
    
                            <div className="d-flex justify-content-between my-2">
                                <div>
                                    Khuyễn mãi:
                                </div>
                                <div>
                                {Order.data.priceCoupon.toLocaleString()}
                                </div>
    
                            </div>
                            <div className="d-flex justify-content-between my-2">
                                <div>
                                    Phí ship:
                                </div>
                                <div>
                                    {Order.data.priceCharge.toLocaleString()}
                                </div>
    
                            </div>
                            <div className="d-flex justify-content-between my-2">
                                <div className="color-primary fs-5 fw-bold">
                                    Thành Tiền:
                                    <div className="line_bottom"></div>
                                </div>
                                <div className="color-primary fs-5 fw-bold">
                                    {Order.data.priceTotal.toLocaleString()}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>)
    }
    return(
        Order.status==="success"?
        InfoReply():
    <div className="row mt-3">
    <div className="d-flex justify-content-center my-5">
                <div id='appendListCategory'>
                    <div className="col-12 p-4 rounded text-center">
                        <div>{message}</div>
                        <img className="img-getOrder"
                            src="https://image.freepik.com/free-vector/design-thinking-concept-illustration_114360-3330.jpg"
                            alt=""/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Reply