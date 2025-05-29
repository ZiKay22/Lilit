import React from "react";
import {  CardItem } from "../Card/card";
import { card } from "../../types"; 
 import "../top3/item.jpg"

const img="https://i.postimg.cc/sx70SbT5/item.jpg";
export const arr_tangaran:card[]=[
    {
        id:1,
        img:"https://i.postimg.cc/Vs2Mbd0b/10.jpg",
        text:"Գորգ ԴՈՓՅԱՆ զինանշանով, գյուղ Խաչակապ"
    },
    {
        id:2,
        img:"https://i.postimg.cc/mgyFqjXQ/5.jpg",
        text:"ԽԱՅԼԻ, գյուղ Պտեցիք "
    },
    {
        id:3,
        img:"https://i.postimg.cc/wjqBtp2m/8.jpg",
        text:"Շուշի, 19-րդ դարի 70-ական թվականներ"
    },
{
    id:4,
    img:"https://i.postimg.cc/GpN3SsCF/3.jpg",
    text:"'ԱՐԾՎԱԳՈՐԳԻ կենտրոնական վարդյակով մանրանախշ գորգ 1911թվական գյուղ Գյուլիստան",
},
{
    id:5,
    img:"https://i.postimg.cc/MppW6YZ0/7.jpg",
    text:"ԱՐԵՎԱԳՈՐԳ , Պտրեցք,1904 թվական։ Մինրև 1978 թվական պահվել է Ստեփանակերտում , Գասպարյանների տանը ",
},
{
    id:6,
    img:"https://i.postimg.cc/dt4YxTRh/1.jpg",
    text:"ԱՐԾՎԵՆՇԱՆ գորգեր Առաջին ՝ գյուղ Պտրեցքի , 1916 ",
},
{
    id:7,
    img:"https://i.postimg.cc/YqX53Bkg/2.jpg",
    text:"'ԹՌՉՆԱԲՈՒՆ Վարանդ, գյուղ Սղնախ ",
},
{id:8,
    img:"https://i.postimg.cc/nhgNyKXh/13.jpg",
    text:"ԱՐԾՎԱԳՈՐԳ 19-րդ դարի 80-ական թվականներ , Շուշիի շրջակայք։",
},
{
    id:9,
    img:"https://i.postimg.cc/VLHht9BW/11.jpg",
    text:"'ԽԱՉ-ԽՈՐԱՆ 1909 թվական, Շուշի ։",
},
{
    id:10,
    img:"https://i.postimg.cc/QMKj2xSc/26.jpg",
    text:"'ԽՆՁՈՐԵՍԿ 19-րդ դարի վերջ, Վարանդա",
},

]
export const ShopTangaran=()=>{

    return(
        <div className="container-fluid">
            <div className="row">
                {arr_tangaran.map((item)=>{
                return <div className="col-lg-4 mb-3">
<CardItem item={item}/>
                </div> 
})}
                
            </div>
        </div>
    )
}