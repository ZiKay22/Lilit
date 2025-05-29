import React from "react";
import { card } from "../../types";
import { CardItem } from "../Card/card";
import "./acs.css"
import { Link } from "react-router-dom";

export const Acs=()=>{
   const arr:card[]=[
     {
        id:18,
         img:"https://i.postimg.cc/GpKCHjtR/mok1.jpg",
         text:"Նոթատետր սպիտակ",
    },
     {
        id:19,
         img:"https://i.postimg.cc/4ymsChJg/mok3.jpg",
         text:"Նոթատետր սև",
     },
     
     ]
    return(
   <div className="container-fluid">
    <div className="container-fluid  ">

  
            <div className="row  mb-3 flex flex-wrap  " >
                {arr.map((item)=>{
                  return (
                    <div  className="card col-lg-5 col-12" style={{backgroundColor:'inherit',color:'inherit'}} >
                    <img  src={item.img} className="card-img-top imgaa" alt="..."/>
                    <div className="card-body" >
                      <p className="card-text" >{item.text}</p>
                      <Link to={"/shop/xaliner"} className="btn btn-primary">
                      Տեսնել ավելին

</Link>
                     
                    </div>
                  </div>
                )
               
})}
      </div>            
            </div>
    
          
        </div>
    )
}