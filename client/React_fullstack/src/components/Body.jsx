import React from "react";
import Cart from "./cart/Cart.jsx"

function Body(props){
    console.log(props)
    return (
        <div className="bg-slate-300 flex justify-center py-[3%] mb-[2%] mx-[15px]">
            <div className="">
                <h3 className="text-4xl">
                    These are the Items that you want to buy....
                </h3>
                <div className="table">
                    {/* make the table into a cart component */}
                    <Cart item={props.cart}/>
                </div>
            </div>
        </div>
    )
}

export default Body