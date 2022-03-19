import React from 'react';
import "./style.css"
import Product from './Product';



function BodyProduct() {
    return (
        <div className="container-fluid">
            <div className="pd-w-100 section-Chapter">
                <div className="preview-Product mt-5">                            
                    <Product/>
                </div>
            </div>
        </div>
        
    ) 
}

export default BodyProduct