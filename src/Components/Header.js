import { React, useState} from "react"
import { Link } from "react-router-dom";
import { Button, Modal, Container, Row, Col } from 'react-bootstrap';
import Cart from './Cart'

function Header() {
    const [show, setShow] = useState(false);
    console.log("Xuất header")
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <div className="bg-header header-app " style={{ top: 0 }}>
                <div className="text-white align-items-center container-fluid">
                    <div className="d-flex align-items-center header-height justify-content-between  pd-w-100 ">
                        <div className="d-flex gap-5  align-items-center">
                            <Link to="/" className="d-flex logo-width">
                                <img
                                    className="w-100 m-auto"
                                    src="https://order.thecoffeehouse.com/_nuxt/img/logo.174bdfd.svg"
                                    alt=""
                                />
                            </Link>
                            <div className="border-giaohang d-flex gap-2 align-items-center">
                                <div className="img-addres">
                                    <img
                                        className="w-100 h-100"
                                        src="https://minio.thecoffeehouse.com/images/tch-web-order/Delivery2.png"
                                        alt=""
                                    />
                                </div>
                                <div className="d-flex align-items-center gap-2 px-2">
                                    <div className="">
                                        <span className="fw-bold">Giao hàng</span>
                                        <div className="fs-min-plus text-address">Tận nhà của bạn</div>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex gap-3 fw-bold navivation-header fs-min-plus">
                                <Link to="/product" className="a-none text-white page-header">
                                    Đặt hàng
                                </Link>
                                <Link to="/news" className="a-none text-white  page-header">
                                    Tin tức
                                </Link>
                                <a
                                    id="btn_show_Modal"
                                    className="a-none pe-cursor text-white page-header"
                                    // onClick={handleShowModal}
                                    onClick={handleShow}
                                >
                                    Khuyến mãi
                                </a>
                                <Link to="/tracuudonhang" className="a-none text-white page-header">
                                    Tra cứu đơn hàng
                                </Link>
                            </div>
                        </div>
                        <div className=" ">
                            <Cart />
                        </div>
                    </div>
                </div>
            </div>
            <Modal show={show} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter">
        <Modal.Header closeButton>
            <Modal.Title>Các chương trình khuyến mãi</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className="col-12  my-2">
                <div className="d-flex justify-content-center content-khuyenmai">
                    <div className="row pd-bd align-items-center">
                        <div className="col-4">
                            <img
                                className="img-preview-edit"
                                src="https://minio.thecoffeehouse.com/image/admin/Coupondelivery10k_238803.jpg"
                                alt=""
                            />
                        </div>
                        <div className="col-8">
                            <span>
                                Giảm 30% trên tổng giá trị của đơn hàng trên 500k <br />{" "}
                                (không bao gồm phí ship)
                            </span>
                            <div
                                className="color-primary mt-2 pe-cursor add_coupon"
                                data="30phantram"
                            >
                                Sử dụng ngay
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-12 my-2">
                <div className="d-flex justify-content-center content-khuyenmai ">
                    <div className="row pd-bd align-items-center">
                        <div className="col-4">
                            <img
                                className="img-preview-edit"
                                src="https://minio.thecoffeehouse.com/image/admin/dong_gia_19k_coupon_499462.jpg"
                                alt=""
                            />
                        </div>
                        <div className="col-8">
                            <span>
                                Giảm trực tiếp 19k vào tổng tiền hóa đơn
                                <br /> (bao gồm phí ship)
                            </span>
                            <div
                                className="color-primary mt-2 pe-cursor add_coupon"
                                data="19tuoixanh"
                            >
                                Sử dụng ngay
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Modal.Body>
        <Modal.Footer>
            <Container>
                <Row className="justify-content-md-center">
                    <Col md="auto">
                        <Button variant="outline-warning" onClick={handleClose}>
                            Hủy khuyến mãi
                        </Button>
                    </Col>
                </Row>
            </Container>
        </Modal.Footer>
        </Modal>

        </>
    )
}

export default Header