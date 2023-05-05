import React from "react";
import Item from "./Item.jsx"

function Cart(props){
    return(
        <>
            <table className="text-lg font-semibold mt-[20%]">
                <Item item={props}/>
            </table>
        </>
    )
}

export default Cart;