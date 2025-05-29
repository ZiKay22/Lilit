import React from "react";
import {  CardItem } from "../Card/card";
 import "../top3/item.jpg"
import { CardItem2 } from "../Card/card2";
import { arr } from "../Xaliner/xaliner";

const img="https://i.postimg.cc/sx70SbT5/item.jpg";
export const ShopXaliner=()=>{
  
    return(
        <div className="container-fluid">
            <div className="row">
                {arr.map((item)=>{
                return <div className="col-lg-4 mb-3">
<CardItem2 item={item}/>
                </div> 
})}
                
            </div>
        </div>
    )
}