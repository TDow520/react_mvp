import React from "react";
import Item from "./Item.jsx"

function Cart(props){
    // console.log(props.items)

    const handleRemoveItem = (itemId) => {
        const updatedCartItems = props.items.filter(item => item.id !== itemId);
        props.setItems(updatedCartItems);
    };

    return(
        <>
            <table className="lg:text-lg font-semibold sm:w-[80%]">
                {props.items.map(
                    (item) => 
                        <Item item={item} key={item.id} onRemove={handleRemoveItem}/>
                    )
                }
            </table>
        </>
    )
}

export default Cart;