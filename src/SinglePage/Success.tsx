import "./success.css"
import React from "react"
export const Success=()=>{
    return(
        <div className="payment-success">
  <div className="header">
    <i className="ion-close-round close" />
  </div>
  <div className="body">
    <h2 className="title"></h2>
    <img
      className="main-img"
      src="https://res.cloudinary.com/dw1zug8d6/image/upload/v1542777688/group-3_3x.png"
      alt=""
    />
    <p>
      Your payment was successful! You can <br />
      now continue using Artycoin.
    </p>
    <img src="https://i.postimg.cc/BnxgMxfF/3d-qr.png" alt="" width={300} height={300}/>
    <button className="btn btn-primary">Սկանավորել</button>
    <a href="" className="cancel">
      Չեղարկել
    </a>
  </div>
</div>

    )
}