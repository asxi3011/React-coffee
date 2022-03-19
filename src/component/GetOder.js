import React, { useState } from 'react';
import './style.css';

import NotFound from './NotFound';
import Normal from './Normal';
import FindOut from './FindOut';


function GetOder(){
    const [id,setId]= useState([])
    const[datas,setData]=useState([])
    // const[trans,setTrans]=useState([])

    const Check = (e)=>{
        // e.preventDefault()
        
        fetch(`https://sever-coffeehouse.herokuapp.com/getOrder?id=${id}`)
     
       
        .then(res=>res.json())
        .then(Order=>{  
            console.log(Order) 
        
          setData(Order)    
        })  
    }

    return(
        <div className="container-fluid">
        <div className="row"> 
        </div>
            <form action="/getOrder" >
                <div className="d-flex justify-content-center mt-5">
                    <div className="col-6 d-flex">
                        <input type="text" name="id" id="Input" onChange={(e)=>setId(e.target.value)}value={id}
                         className="form-control d-inline border-radius-none" placeholder="Nhập mã đơn hàng"/>
                        {/* <FindOut  dataFromParent ={trans} /> */}
                        <button type="Button" onClick={()=>Check(id)} className="btn bg-gradient-primary w-50 border-radius-none text-white">Theo dõi đơn
                            hàng</button>
                    </div>
                </div>
            </form>

            {id && datas.status ? "" : <Normal/> }
            {datas.status === 'fail' ? <NotFound/>  : ""}
            {datas.status ==='success' ? <FindOut dataFromGetOder={id}/> : "" }
            {/* đẩy giá trị id qua hàm findOut */}
     
         </div>            
        )    
}

    
export default GetOder