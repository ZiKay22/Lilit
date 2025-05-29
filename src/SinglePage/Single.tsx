import React from "react";
import { arr } from "../Xaliner/xaliner";
import { arr_tangaran } from "../Shop/shop_tangaran";
import { Link, useParams } from "react-router-dom";
import PaymentForm from "./Form";


export function SingleXali() {
  const combinedArr = [...arr, ...arr_tangaran];
  const all__arr = combinedArr.filter(
    (item, index, self) =>
      index === self.findIndex((el) => el.id === item.id)
  );

  const { id } = useParams();
  const single = all__arr.find(item => item.id === Number(id));

  if (!single) {
    return (
      <h2 style={{ backgroundColor: 'inherit', color: 'inherit' }}>Error</h2>
    );
  }

  return (
    <div className="card mb-3" style={{backgroundColor:'inherit',color:'inherit'}}>
      <div className="row g-0">
        <div className="col-md-4">
          <img src={single.img} className="img-fluid rounded-start" alt="..." />
          <p className="card-text">{single.text}</p>

        </div>
        <div className="col-md-8">
          <div className="card-body ">
           <PaymentForm/>

          </div>
        </div>
      </div>
    </div>
  );
}
