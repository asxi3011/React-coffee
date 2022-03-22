import { Link } from "react-router-dom";
function ListProduct({posts}){
    console.log(posts);
    return (
        <div className="preview-News mt-5">
            <div className="row my-3">
                {posts.dataProducts.map(post => (
                    <div key={post._id} className="col-lg-2 col-md-4 col-sm-12 my-2">
                        <div className="border-product">
                            <Link to={`/product/${post.slug}/`} className="a-none text-dark">
                                <div className="">
                                    <div>
                                        <img
                                            className="img-product"
                                            src={`https://sever-coffeehouse.herokuapp.com/uploads/${post.imageRepresent}`}
                                            alt=""
                                        />
                                    </div>
                                    <div className="preview-info-product">
                                        <h4 className="name-product fs-6 fw-bolder">
                                            {post.nameProduct}
                                        </h4>
                                        <div className="d-flex justify-content-between align-items-center mt-4">
                                            <div className="fs-6 price">
                                                {post.priceStandard}
                                            </div>
                                            <div className="fs-3">
                                                <i className="fas fa-plus-circle color-primary" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                ))}
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
                            onClick={setCoupon("30phantram")}
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
                            onClick={setCoupon("19tuoixanh")}
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
        </div>
        
    )
}

export default ListProduct