import React, {useState} from "react";
import Item from "./Item.jsx"

function Cart(props){
const [] = useState("")

    // console.log(props.items)
    return(
        <>
            <table className="lg:text-lg font-semibold w-[100%]">
                {props.items.map(
                    (item) => 
                        <Item item={item} key={item.id}/>
                    )
                }
            </table>
        </>
    )
}

export default Cart;