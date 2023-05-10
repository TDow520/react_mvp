import React from "react";

function Head() {
    return (
        <>
            <div className="relative mt-1">
                <img className="w-full mt-[-5]" src="/images/Group 1.png" alt=""/>
                
                <h1 className="text-slate-100 absolute text-lg md:text-[150%] lg:text-[250%] xl:text-[350%] sm:top-1/4 sm:left-[48%] top-[15%] left-1/2 -translate-x-1/2 translate-y underline">
                    Welcome to your shopping cart!
                </h1>
            </div>
        </>
    );
}

export default Head;
