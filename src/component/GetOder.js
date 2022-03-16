import React, { useEffect, useState } from 'react';
import './style.css';
import FindOut from './FindOut';
import NotFound from './NotFound';
import Normal from './Normal';

function GetOder(){
    const [id,setId] = useState('')
    const [data,setData] = useState({})
    const [findingView,setFindingView]=useState(<Normal/>)
    useEffect(()=>{
        const handlebyid=(data)=>{
        
        
            if(data.status){
                data.status === 'fail' ? setFindingView(<NotFound/>)   : setFindingView(<FindOut order = {data.data}/>) 
            }
            else{              
               setFindingView( <Normal/>)
            }

    }
    },[])
    
    const Check = (e)=>{
        e.preventDefault()
        fetch(`https://sever-coffeehouse.herokuapp.com/getOrder?id=${id}`)
        .then(res=>res.json())
        .then(Order=>{   
          
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
                        <button type="Button" onClick={()=>handlebyid(data)} className="btn bg-gradient-primary w-50 border-radius-none text-white">Theo dõi đơn
                            hàng</button>
                    </div>
                </div>
            </form>
                <div>
                    {findingView}
                </div>
         </div>            
        )    
}

    
export default GetOder