function ItemCart(nameProduct,sizeProduct,quanity,note,Price,index){
    return(
    <div class="col-12">
    <div class="line-product d-flex  align-items-center gap-2 my-2">
        <div class="btn btn-edit-product-cart" index="">
            <i class="fas fa-pen color-primary"></i>
        </div>
        <div class="flex-grow-1">
            <div class="fw-bold">
            3 x Cà phê sữa
            </div>
            <div>
                Size : M
            </div>
            <div>
                Không ghi chú
            </div>
            <div class="btn-delte-product-cart d-inline-block" index="${index}">
              Xóa
            </div>
        </div>
        <div>
            100.000VND
        </div>
    </div>
    </div>);
  }
  export default ItemCart