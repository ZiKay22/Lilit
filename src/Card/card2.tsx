import React from "react";
import { card } from "../../types";
import { Link } from "react-router-dom";

export const CardItem2 = ({item}:{item:card}) =>{
    return(
    <div  className="card" style={{backgroundColor:'inherit',color:'inherit'}} >
  <img  src={item.img} className="card-img-top" alt="..."/>
  <div className="card-body" >
    <p className="card-text" >{item.text}</p>
    <Link to={`/shop/${item.id}`} key={item.id} className="btn btn-primary">
    Գնել
</Link>
  </div>
</div>

 )
}