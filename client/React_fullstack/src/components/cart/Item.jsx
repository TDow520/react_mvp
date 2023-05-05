import React from "react";

function Item(props){
console.log(props)

    return(
        <>
            {/* make each row into an item from the database */}
            <tr className="flex w-[275%]">
                <td >
                    Item
                </td>
                <td className="mx-[95%]">
                    Kind
                </td>
                <td>
                    Price
                </td>
            </tr>
        </>
    )
}

export default Item;