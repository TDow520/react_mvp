import React from "react";
import Cart from "./cart/Cart.jsx"

function Body(props){
    // console.log(props)
    return (
        <div className="bg-slate-300 flex py-[2px] lg:py-[3%] mb-[2%] lg:mx-[1%] lg:px-[13%] lg:justify-center px-[29%]">
            <div className="">
                <h3 className="lg:text-4xl text-center ml-[0px]">
                    These are the items that you want to buy....
                </h3>
                <div className="w-[150%]  ">
                    {/* make the table into a cart component */}
                    <Cart items={props.cartItems} setItems={props.setCartItems}/>
                </div>
            </div>
        </div>
    )
}

export default Body