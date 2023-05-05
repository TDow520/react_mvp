import React, {useEffect, useState} from "react";

const [item, setItem] = useState();
const [style, setStyle] = useState();
const [price, setPrice] = useState();

const UpdateCart = () => {
    fetch("http://localhost:3000/api/items", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            item: formItem,
            style: formStyle,
            price: formPrice
        }),
    })
    .then (response => response.json())
    .then (data => {
        console.log(data)
    })
    
}

const handleItemChange = (event) => {
    setItem(event.target.value)
}

const handlePriceChange = (event) => {
    setPrice(event.target.value)
}

const handleStyleChange = (event) => {
    setStyle(event.target.value)
}

function Footer(){
    return (
        <>
            <div className="">
                <form onSubmit={UpdateCart} className="flex justify-center mx-auto bg-slate-700 w-[40%] rounded-xl">
                    <div className="mx-[5%]">
                        <label for="item name" className="text-slate-100">Item Name:</label>
                        <input type="text" className="bg-gray-200 w-[95%] mb-[2%] mt-[10px]" value={formItem} onChange={handleItemChange}/>
                        <label for="style" className="text-slate-100">Style:</label>
                        <input type="text" className="bg-gray-200 w-[95%] mb-[2%] mt-[10px]" value={formStyle} onChange={handleStyleChange}/>
                        <label for="price" className="text-slate-100">Price:</label>
                        <input type="text" className="bg-gray-200 w-[95%] mb-[5%] mt-[10px]" value={formPrice} onChange={handlePriceChange}/>
                    </div>
                </form>
                <button type="submit" className="mx-[50%] my-[25px] bg-blue-200 rounded-lg w-[5%]">submit</button>
            </div>
        </>
    )
}

export default Footer;