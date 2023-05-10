function Modal(props) {
    return (
        <div
            className="fixed pt-[15%] my-[10px] ml-[50%] z-50 w-[50%] px-[15%] rounded-lg md:inset-0 h-[calc(100%-1rem)] max-h-full bg-slate-400"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            aria-describedby="modal-content"
            tabIndex="-1"
        >
            <div className="relative w-[85%] min-w-[325px] max-w-xl min-h-[250px] max-h-full bg-sky-200 rounded-lg shadow-lg py-[3%]  ml-[-25px]">
                <button
                    onClick={() => props.setShow(false)}
                    className="absolute top-2 right-4 text-gray-500 font-bold"
                >
                    X
                </button>
                <div className="title flex justify-center w-full ">
                    <h1 className="font-sans sm:mt-[15px] text-2xl lg:text-lg font-semibold">Please sign-in</h1>
                </div>
                <div className="body flex justify-center w-full">
                    <form action="" className="flex-row justify-center w-[50%]">
                        <label htmlFor="username">Username</label>
                        <input type="text" name="username" id="username" className="w-full"/>
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" className="w-full"/>
                        <button
                            type="submit"
                            className="bg-gray-500 my-[3%] mr-[26%] sm:mt-2 rounded-md text-slate-50 p-[2px] focus:ring-2"
                        >
                            Submit
                        </button>
                        <button
                            type="submit"
                            className="bg-gray-500 ml-[25%] sm:mt-1 rounded-md text-slate-50 p-[2px] focus:ring-2"
                            onClick={() => props.setShow(false)}
                        >
                            Cancel
                        </button>
                    </form>
                </div>
                <div className="footer"></div>
            </div>
        </div>
    );
}

export default Modal;
