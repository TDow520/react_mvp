import React from "react";
import Cart from "./cart/Cart.jsx"

function Body(props){
    // console.log(props)
    return (
        <div className="bg-slate-300 flex lg:py-[3%] mb-[2%] lg:mx-[1%] lg:px-[13%] justify-center">
            <div className="">
                <h3 className="lg:text-4xl text-center ml-[0px]">
                    These are the Items that you want to buy....
                </h3>
                <div className="w-[150%]  ">
                    {/* make the table into a cart component */}
                    <Cart items={props.cart}/>
                </div>
            </div>
        </div>
    )
}

export default Body