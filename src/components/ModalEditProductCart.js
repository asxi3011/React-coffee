function ModalProduct(name,description,price,quanity,size,img,note,id){
    var a = "";
    size.forEach(function(element){
      a = a+`<div class="d-flex align-items-center gap-3">
      <input class="form-check-input rad-primary" type="radio" name="sizePrice" id="${element.name}" value="${element.value}">
      <div>
          <label class="d-block" for="${element.name}">${element.name}</label>
          <label class="d-block price-size-show" for="${element.name}">${element.value}</label>
          <label class="price-size" hidden>${element.value}</label>
      </div>
      </div>
      `
    })   
    return `<div class="text-center fw-bold fs-6 my-3">
          Sản phẩm
      </div>
      <div class="d-flex gap-3 align-items-center">
          <img class="img-cart-modal" src="/uploads/${img}" alt="">
          <div class="d-flex flex-grow-1 flex-column gap-3">
              <div id="name_product" class="fw-bold">${name}</div>
              <div>
                ${description}
              </div>
              <div class="d-flex justify-content-between align-items-center">
                  <div id="details-price-product" class="">${price}</div>
                  <div class="quanity-product">
                                      <button id="btn_down" type="button" class="btn btn-circle-primary btn-circle-disable mx-2"><i class="fas fa-minus text-white"></i></button>
                                      <span class="mx-2" name="test" id="lbl_quanity">${quanity}</span>
                                      <button type="button" id="btn_up" class="mx-2 btn btn-circle-primary"><i class="fas fa-plus text-white"></i></button>
                  </div> 
              </div>
          </div>
      </div>
      <div class="input-group my-3">
                                      <div class="input-group-prepend">
                                      <div class="input-group-text"><i class="fas fa-sticky-note fs-4 text-secondary"></i></div>
                                      </div>
                                      <input type="text" class="form-control" id="inlineFormInputGroup" placeholder="Ghi chú cho món tại đây" value="${note}">
          </div>
          <div class="mt-4 bd-size">
                                  <div class="bg-border ">Chọn size (BẮT BUỘC)</div>
                                  <div class=""> 
                                      <div class="d-flex justify-content-evenly p-2">`+
                                     
                                      a                                   
                                    +`
                                      </div>
                                  </div>
          </div>
      <div class="text-center my-3">
          <button type="submit" class="btn btn-color-primary w-100 mt-4" id="btn_addToCart">
                                  <span id="price_Total" hidden>${price}</span>
                                  <span id="price_Total_show">${price}</span> - Thêm vào giỏ hàng
                              </button>
                              <input id="id_product" name="id_product" type="hidden" value="${id}">
      </div>`
  }
export default ModalProduct