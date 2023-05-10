import React, { useState } from "react";
import Modal from "./Modal";

function Signin() {
    const [showModal, setShowModal] = React.useState(false);
    if(showModal){

    }

    return (
        <div className="flex bg-black w-[100%] justify-end">
            <button className=" my-[15px] mr-[4%] text-white border border-white p-[3px] rounded-md" onClick={() => {setShowModal(true)}}>
                Sign-in
            </button>
            {showModal ? <Modal show={showModal} setShow={setShowModal}/> : null}
        </div>
    );
};

export default Signin;