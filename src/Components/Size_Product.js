import React from "react";
import { useState } from 'react';
const sizes = [{ id: 1, name: 'M', sizePrice: 1000 },
{ id: 2, name: 'L', sizePrice: 2000 }
]

const SizePrice = ({ sendDataToParent }) => {

    const [checked, setChecked] = useState(false)

    return (

        <div className="mt-4 bd-size">
            <div className="bg-border ">Chọn size (BẮT BUỘC)</div>
            <div className="">
                <div className="d-flex justify-content-evenly p-2">
                    {sizes.map(size => (
                        <div className="d-flex align-items-center gap-3" key={size.id}>

                            <input className="form-check-input rad-primary" id="sizePrice" type="radio" name="sizePrice"
                              value={size.id}   onChange={e=>{
                                    setChecked(e.target.value)
                                    sendDataToParent(size)
                                    e.target.value=null
                                }}
                               
                                
                            />
                            <div>
                                <label className="d-block" >{size.name}</label>
                                <label className="d-block price-size-show"
                                > {(size.sizePrice).toLocaleString('vi-VN')}đ</label>
                                <label className="price-size" hidden>s</label>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default SizePrice