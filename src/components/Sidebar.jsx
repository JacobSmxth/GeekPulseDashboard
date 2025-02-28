

const Sidebar = () => {

    // https://api.dicebear.com/9.x/pixel-art/svg?seed=jsmittytv

    return (
        <div className="sidebar-shadow min-w-75 bg-gray-900 min-h-screen drop-shadow-2xl">
            <div className="relative w-full h-full">
                <div className="w-full absolute left-0 bottom-0 flex border-t-1 border-gray-800 p-4">
                    <img className=" cursor-pointer transition border-2 border-gray-400 rounded-full w-15" src="https://api.dicebear.com/9.x/pixel-art/svg?seed=jsmittytv" alt="" />
                    <span className="flex flex-col justify-center ml-3">
                        <h2 className="relative text-xl w-fit block text-gray-200 ">Jacob Smith</h2>
                        <a href="mailto:jacobsmith@jsmitty.com" className="text-sm text-gray-400 border-2 border-transparent hover:border-b-gray-400 transition duration-200">jacobsmith@jsmitty.com</a>
                    </span>

                </div>

            </div>
        </div>
    )
}

export default Sidebar;