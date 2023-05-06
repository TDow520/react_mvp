import React from "react";

function Item(props){
console.log(props)


    return(
        <div className="flex justify-center">
            {/* make each row into an item from the database */}
            <tr className="my-[10px] md:w-[95%] lg:w-[65%] border border-sky-500">
                <td className="lg:p-[12px] lg:w-[335px] md:w-[12%] text-center ">
                    {props.item.name}
                </td>
                <td className="mx-[9px] lg:w-[335px] text-center ">
                    {props.item.style}
                </td>
                <td className="mx-[9px] lg:w-[335px] text-center ">
                    ${props.item.price}
                </td>
            </tr>
            <button type="submit" className="bg-teal-100 mx-[7%] h-[35px] w-[60px] m-auto rounded-md shadow-md" onClick>delete</button>
        </div>
    )
}

export default Item;