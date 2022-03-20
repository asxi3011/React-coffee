
import {React, useState, useEffect,useCallback } from "react"
import axios from 'axios'
import { useParams } from 'react-router-dom';
import Category from "./Category"
import Slider from "./Slider"
import CardProduct from "./CardProduct"
function ProductInCategory({categorys}) {
    const { slug } = useParams();
    const [products, setProducts] = useState([])
    const fetchMyAPI = useCallback(async () => {
        if(slug === "product"){
            const response = await axios.get(`https://sever-coffeehouse.herokuapp.com/getProducts`);
            setProducts(response.data.dataProducts)
        }else{
            const response = await axios.get(`https://sever-coffeehouse.herokuapp.com/getProductsInCategory/${slug}`)
            setProducts(response.data.dataProducts);
        }
      }, [slug])
    useEffect(async () => {
        fetchMyAPI();
    }, [fetchMyAPI])
        return (
            <>
                <div className="pd-header">
                    <Slider/>
                    <div className="container-fluid">
                        <div className="pd-w-100 section-Chapter">
                            <div className="preview-Menu">
                                <div className="text-center fs-3 mb-3">
                                    <span>
                                        <i className="fas fa-trophy color-primary fs-4" />
                                    </span>
                                    Sản phẩm từ Nhà
                                </div>
                                 <div className="d-flex flex-wrap justify-content-center list-category pd-t-50 divTest">
                                     {categorys.map((category,index)=><Category key={index} category={category} style={slug===category.slug?
                                     {backgroundColor:"#fb8f19"}:{}} styleColor={slug===category.slug?
                                        {color:"#fb8f19",fontWeight:"bold"}:{}}/>)}  
                                </div> 
                            </div> 
                            <div className="preview-Product mt-5">
                                <div className="row my-3">
                                 
                                     
                                            <div className="text-center fs-3">
                                                <i className="fas fa-newspaper fs-4 color-primary" /> Danh mục sản phẩm
                                            </div>
                                            <div className="preview-Product mt-5">
                                                <div className="row my-3">
                                                 {products.map((product,index)=><CardProduct key={index} product={product}/>)}   
                                                </div>
                                                </div>                                      
                                    
                                  
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
}

export default ProductInCategory

