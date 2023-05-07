import React, {useEffect, useState} from "react";

function Footer(props) {
    const [formItem, setFormItem] = useState("");
    const [formStyle, setFormStyle] = useState("");
    const [formPrice, setFormPrice] = useState("");

    useEffect(() => {
        fetchCartItems();
    }, []);

    const fetchCartItems = () => {
        fetch("http://localhost:3000/api/items", {
            method: "GET",
        })
            .then((response) => response.json())
            .then((data) => {
                props.setCartItems(data);
            })
            .catch((error) => console.error(error));
    };

    const addCartItem = (event) => {
        event.preventDefault();

        fetch("http://localhost:3000/api/items", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: formItem,
                style: formStyle,
                price: formPrice,
            }),
        })
            .then((response) => response.json())
            .then((data) => {
                // console.log(data);
                props.setCartItems(data);
                fetchCartItems();
            })
            .catch((error) => console.error(error));

        // Clear form inputs after submission
        setFormItem("");
        setFormStyle("");
        setFormPrice("");

    };

    const handleItemChange = (event) => {
        setFormItem(event.target.value);
    };

    const handlePriceChange = (event) => {
        setFormPrice(event.target.value);
    };

    const handleStyleChange = (event) => {
        setFormStyle(event.target.value);
    };

    return (
        <>
            <div className="">
                <form
                    onSubmit={addCartItem}
                    className="flex justify-center mx-[33%]  sm:mx-[29%] lg:mx-[34%] bg-slate-700 w-[40%] rounded-xl"
                >
                    <div className="mx-[5%] mt-[2%]">
                        <label htmlFor="item name" className="text-slate-100">
                            Item Name:
                        </label>
                        <input
                            type="text"
                            id="item name"
                            name="item name"
                            className="bg-gray-200 w-[95%] mb-[2%] mt-[10px]"
                            value={formItem}
                            onChange={handleItemChange}
                        />
                        <label htmlFor="style" className="text-slate-100">
                            Style:
                        </label>
                        <input
                            type="text"
                            id="style"
                            name="style"
                            className="bg-gray-200 w-[95%] mb-[2%] mt-[10px]"
                            value={formStyle}
                            onChange={handleStyleChange}
                        />
                        <label htmlFor="price" className="text-slate-100">
                            Price:
                        </label>
                        <input
                            type="text"
                            id="price"
                            name="price"
                            className="bg-gray-200 w-[95%] mb-[5%] mt-[10px]"
                            value={formPrice}
                            onChange={handlePriceChange}
                        />
                    </div>
                </form>
                <button
                    type="submit"
                    onClick={addCartItem}
                    className="mx-[47%] sm:mx-[41%] lg:mx-[45%] my-[25px] bg-blue-200 rounded-lg w-[15%]"
                >
                    Submit
                </button>
            </div>
        </>
    );
}

export default Footer;