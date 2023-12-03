import React from "react";
import CartItem from "./CartItem";

const Cart = () => {
    return (
        <div>{
            [1,1,1,1].map((item) => <CartItem />)}</div>
    )


}

export default Cart;