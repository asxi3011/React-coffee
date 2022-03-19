
import ItemCart from './ItemCart'
function PageCart(){
    return ( 
            <div className="pd-header">
            
                    <div className="pd-w-100">
                        <div className="mt-5 text-center fs-4">
                            <i className="fas fa-file text-warning"></i>
                            <span className="fw-bold">
                                Xác nhận đơn hàng
                            </span>
                        </div>

                        <div className="row my-5">
                            <div className="col-6">
                                <div className="pd-12">
                                    <div className="d-flex align-items-center py-3 header">
                                        <span className="fw-bold fs-5">
                                            Giao hàng
                                            <img className="img-min"
                                                src="https://minio.thecoffeehouse.com/images/tch-web-order/Delivery2.png" alt=""/>
                                        </span>

                                    </div>
                                    <div className="line_bottom"></div>
                                    <input type="text" name="addressCus" className="form-control input-text-address"
                                        placeholder="Địa chỉ" required/>
                                    <input type="text" name="nameCus" className="form-control input-text-address"
                                        placeholder="Tên người nhận" required/>
                                    <input type="text" name="numberCus" className="form-control input-text-address"
                                        placeholder="Số điện thoại" required/>
                                    <input type="text" name="emailCus" className="form-control input-text-address" placeholder="Email"
                                        required/>
                                    <input type="text" name="noteCus" className="form-control input-text-address"
                                        placeholder="Thêm hướng dẫn giao hàng"/>

                                    <div className="d-flex align-items-center py-3 header">
                                        <span className="fw-bold fs-5">
                                            Phương thức thanh toán
                                        </span>

                                    </div>
                                    <div className="line_bottom"></div>
                                    <div className="form-check my-3 fs-5">
                                        <input className="form-check-input rad-primary" type="radio" name="radPayment" value="Tiền mặt"
                                            id="radPayment" checked/>
                                        <label className="form-check-label" for="radPayment">
                                            <i className="fas fa-money-bill text-success"></i> Tiền mặt
                                        </label>
                                    </div>
                                    <div className="form-check my-3 fs-5">
                                        <input className="form-check-input rad-primary" type="radio" name="radPayment" value="VN Pay"
                                            id="radPaymentOnline"/>
                                        <label className="form-check-label" for="radPaymentOnline">
                                            <i className="fas fa-money-check text-warning"></i> VN Pay
                                        </label>
                                    </div>

                                </div>
                            </div>
                            <div className="col-6">
                                <div className="bd-cart">
                                    <div>
                                        <div className="d-flex justify-content-between align-items-center py-3 header">
                                            <span className="fw-bold fs-5">
                                                Các món đã chọn
                                            </span>
                                            <a href="/" className="btn btn-no-background a-none text-dark">
                                                Thêm món
                                            </a>
                                        </div>
                                        <div className="line_bottom">

                                        </div>
                                        <div className="row" id="listProductCart">
                                                <ItemCart/>
                                                <ItemCart/>
                                                <ItemCart/>
                                        </div>

                                        <div className="fw-bold fs-5 py-2">
                                            Tổng cộng
                                        </div>
                                        <div className="line_bottom"></div>
                                        <div className="">
                                            <div className="py-3 d-flex justify-content-between align-items-center bd-bottom">
                                                <span className="">
                                                    Thành tiền
                                                </span>
                                                <span id="price_total" className="">

                                                </span>
                                            </div>
                                            <div className="py-3 d-flex justify-content-between align-items-center bd-bottom">
                                                <span className="">
                                                    Phí vận chuyển
                                                </span>
                                                <span id="price_charge_show" className="">

                                                </span>
                                                <span id="price_charge" className="" hidden>30000</span>
                                            </div>
                                            <div className="py-3 d-flex justify-content-between align-items-center">
                                                <div id="btn_show_modal_KM" className="color-primary pe-cursor">Khuyến mãi</div>
                                                <div id="content-coupon"></div>
                                            </div>
                                            <div className="bg-getAll py-3">
                                                <form action="/create_payment_url" name="create_payment_url" method="post">
                                                <div className="d-flex align-items-center justify-content-between">
                                                        <div className="text-white">
                                                            <div>Thành tiền</div>
                                                            <div id="price_total_with_charge_show" className="fw-bold"></div>
                                                            <input id="price_total_with_charge" name="priceTotal" className="fw-bold" hidden></input>
                                                        </div>
                                                        <button id="btn_Dat_Hang" type="submit" className="btn btn-light color-primary">
                                                            Đặt hàng
                                                        </button>
                                                </div>
                                                </form> 
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                   
             </div>
    );
}

export default PageCart;