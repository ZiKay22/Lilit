import React from "react";
import {  CardItem } from "../Card/card";
import { card } from "../../types"; 
 import "./item.jpg"
import { Link } from "react-router-dom";

const img="https://i.postimg.cc/sx70SbT5/item.jpg"
export const Tops=()=>{
    const arr:card[]=[{
        id:15,
        img:"https://i.postimg.cc/14h4RK7S/IMG-56531.jpg",
        text:"ԵՐԿԱՅՆԱՁԻԳ-ԵՐԿՐԱՉԱՓԱԿԱՆ ՀՈՐԻՆՎԱԾՔՈՎ ԳՈՐԳ                                               XIXդ․ վերջ, Եղեգնաձոր բուրդ , 255x190սմ"
    },
    {
        id:16,
        img:"https://i.postimg.cc/RVgVD449/IMG-56693.jpg",
        text:"ԳՈՐԳ 'ՀԱՐՍԱՆԵԿԱՆ' XIXդ․ վերջ, գ․Բերդաշեն, Արցախ, 180x138սմ, բուրդ"
    },
    {
        id:17,
        img:"https://i.postimg.cc/9f7m09TF/IMG-56602.jpg",
        text:"ՎԱՐԴԱԿՈՎ ՄԵԴԱԼԻՈՆՈՎՈՐ ԳՈՐԳ 1934թ․ , Երևան, 219x149սմ, բուրդ,բամբակ"
    },
    ]
    return(
        <div className="container-fluid">
            <div className="row">
                {arr.map((item)=>{
                return (
                    <div  className="card col-lg-4 col-12" style={{backgroundColor:'inherit',color:'inherit'}} >
                    <img   src={item.img} className="card-img-top" alt="..."/>
                    <div className="card-body" >
                      <p className="card-text" >{item.text}</p>
                      <Link to={"/shop/tangaran"} className="btn btn-primary">
                Տեսնել բոլորը
</Link>
                     
                    </div>
                  </div>
                )
})}
                
            </div>
        </div>
    )
}