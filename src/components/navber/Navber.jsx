const Navber = () => {
    return (
        <nav className='shadow mb-4 border-b border-purple-100'>
            <div className="max-w-[1450px] mx-auto flex justify-between items-center p-4">
                <div>
                    <h2 className='md:text-2xl text-xl font-bold'>CS — Ticket System</h2>
                </div>
                <div className='flex items-center'>
                    <ul className="flex gap-4">
                        <li className='text-sm text-gray-500'><a href="/">Home</a></li>
                        <li className='text-sm text-gray-500'><a href="/">FAQ</a></li>
                        <li className='text-sm text-gray-500'><a href="/">Changelog</a></li>
                        <li className='text-sm text-gray-500'><a href="/">Blog</a></li>
                        <li className='text-sm text-gray-500'><a href="/">Download</a></li>
                        <li className='text-sm text-gray-500 mr-3'><a href="/">Contact</a></li>
                    </ul>
                    <button className='px-4 py-2 rounded-lg hover:cursor-pointer bg-linear-to-r to-[#9F62F2] from-[#632EE3] text-white'>+ New Ticket</button>
                </div>
            </div>
        </nav>
    );
};

export default Navber;