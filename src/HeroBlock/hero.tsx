import React from "react";
import "./hero.css"
import { Link } from "react-router-dom";
export const Hero =()=>{
    return(
        <div className="container-fluid mb-5">
            <div className="hero__content d-flex align-items-center">
                <Link className="btn text-light hero__btn bg-secondary" to="/shop/xaliner">Տեսնել ավելին</Link>
            </div>
        </div>
    )
}