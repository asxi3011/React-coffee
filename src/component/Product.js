import React, { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import './style.css';
import axios from "axios";



function Product(){
   
    const [posts, setPost] = useState([])
    useEffect(() => {
        axios.get(`https://sever-coffeehouse.herokuapp.com/getProducts`)
            .then((response) => {
                setPost(response.data.dataProducts);
            });
    }, [])
   



    return(
     
        <div className="row my-3"> 
        {posts.map(post=>(  
        <div key={post._id} className="col-lg-2 col-md-4 col-sm-12 my-2">
    
        
        <div  className="border-product">


            {/* Nhập link qua chi tiết sp */}
            <a href="" className="a-none text-dark">
                <div className="">
                    <div>
                        <img className="img-product"
                            src={`https://sever-coffeehouse.herokuapp.com/uploads/${post.imageRepresent}`}
                            alt="Post"/>
                    </div>
                    <div className="preview-info-product">
                        <h4 className="name-product fs-6 fw-bolder">
                            {post.nameProduct}
                        </h4>
                        <div className="d-flex justify-content-between align-items-center mt-4">
                            
                            <div className="fs-6 price">

                               { post.priceStandard.toLocaleString('vi-VN', {style:'currency', currency:'VND'})}
                               
                                
                            </div>
                         
                            {/* Gắn Link vào chỗ này thêm vào giỏ hàng */}
                            <button type="button" id="btn_up" className="mx-2 btn btn-circle-primary" >
                                <FaPlus className="fas fa-plus text-white"></FaPlus>
                            </button>  

                        </div>
                        
                    </div>

                </div>
            </a>

        </div>

    </div>      
      ))}
      </div>  
      

   

       

   
    
    )
}
export default Product