function NavBar() {
    
    return (
        <nav className="fixed top-0 left-0 w-full bg-black/80 shadow-md p-4 text-white backdrop-blur-md z-50">
            <div className="max-w-7xl mx-auto flex justify-center">
                <ul className="flex space-x-6 justify-center items-center">
                    <li><a href="#design"className="hover:text-gray-300 transition">Design</a></li>
                    <li><a href="#camera"className="hover:text-gray-300 transition">Câmera</a></li>
                    <li><a href="#performance" className="hover:text-gray-300 transition">Performance</a></li>
                    <li><a href="#cores" className="hover:text-gray-300 transition">Cores</a></li>

                    <li><button type="button" className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-full cursor-pointer">Comprar</button></li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar