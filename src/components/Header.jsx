import { useState, useEffect, useRef } from "react"
import {Link, NavLink, useNavigate} from "react-router-dom"
import Logo from "../assets/logos_and_bg/logo2.webp"
import API from "../services/api"
import { IoSearch } from "react-icons/io5"
import { FaStar } from "react-icons/fa";

export default function Header() {

    const BASE_URL = 'http://127.0.0.1:8000';
    
    const [isNavOpen, setIsNavOpen] = useState(false)
    function handleNavOpen(){
        setIsNavOpen((prevValue)=>!prevValue)
    }

    function handleCloseNav() {
        setIsNavOpen(false)
    }

    const activeStyle = {
        textDecoration: "underline white solid 1.5px",
        textUnderlineOffset: "3px"
    }
    
    const [searchOpen, setSearchOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [isSearching, setIsSearching] = useState(false);
    const [productsFound, setProductsFound] = useState(null)
    const searchRef = useRef(null);
    const navigate = useNavigate();

    useEffect(()=>{
        const delayDeBounce = setTimeout(()=>{
            if(searchTerm.trim()){
                fetchSearchResults(searchTerm)
            } else {
                setSearchResults([])
            }
        },500)
    },[searchTerm])

    const fetchSearchResults = async (searchQuery) => {
        setIsSearching(true)
        try {
            const response = await API.get(`/products/?search=${encodeURIComponent(searchQuery)}&page_size=10`)
            setSearchResults(response.data.results || [])
            setProductsFound(true)
        } catch(error) {
            console.log("Search failed to retrieve data: ", error)
            setSearchResults([])
            setProductsFound(false)
        } finally {
            setIsSearching(false)
        }
    }

    const handleProductClick = (product) =>  {
        navigate(`/menu/products/?category=${product.category}`);
        setSearchOpen(false)
        setSearchTerm('')
        setSearchResults([])
    }

    useEffect(()=>{
        const handleClickOutside= (event) =>{
            if (searchRef.current && !searchRef.current.contains(event.target)) {
                setSearchOpen(false);
                setSearchTerm('');
                setSearchResults([]);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);



    return (
        <header className="relative">
            <nav className="navbar bg-navbar fixed top-0 left-0 w-full max-h-15 flex flex-row items-center justify-between pr-6 z-50">
                <Link to="/">
                    <img 
                        src={Logo} 
                        alt="RJ Bakery 'n Sweets Logo" 
                        title="RJ Bakery 'n Sweets" 
                        className="w-40 h-fit p-3 sm:w-45 md:w-50" 
                        loading="eager" fetchPriority="high" 
                    />
                </Link>
                <div className="flex items-center gap-2 md:gap-5">
                    <div ref={searchRef}>
                        <button onClick={()=>setSearchOpen(!searchOpen)} className="p-2 rounded-full cursor-pointer">
                            <IoSearch size={25} className="text-white active:outline-2 active:outline-offset-5 active:rounded-xs focus:outline-2 focus:outline-offset-5 focus:rounded-xs hover:text-gray-400" />
                        </button>
                        {searchOpen && (
                            <div className="absolute p-2 w-full right-0 mt-2 z-5  lg:w-1/2 xl:w-1/3">
                                <input 
                                    type="text" 
                                    placeholder="Search bakery items..." 
                                    value={searchTerm} 
                                    onChange={(e)=>setSearchTerm(e.target.value)}
                                    className="w-full p-2 border rounded-2xl bg-white text-black"
                                    autoFocus
                                />
                                <div className="max-h-96 overflow-y-auto mt-2 rounded-xl">
                                    {isSearching && (
                                        <p className="bg-white p-2">Searching...</p>
                                    )}
                                    {productsFound === false && (
                                        <p>No items found!</p>
                                    )}
                                    {searchResults.length > 0 && (
                                        searchResults.map((food)=>{
                                            return (
                                                <div 
                                                    key={food.id} 
                                                    className="flex justify-between bg-white p-2 cursor-pointer hover:border hover:bg-gray-100" 
                                                    onClick={() => handleProductClick(food)}
                                                >
                                                    <div className="flex gap-2">
                                                        <img src={`${BASE_URL}${food.image}`} alt={food.name} className="h-20 w-20 object-cover" />
                                                        <div>
                                                            <p>{food.name}</p>
                                                            <p className="flex items-center gap-1">{food.average_rating}<FaStar size={13} className="text-yellow-500" /></p>
                                                        </div>
                                                    </div>
                                                    <p>&#8377;{food.price}</p>
                                                </div>
                                            )
                                        })
                                    )}

                                </div>
                            </div>
                        )}
                    </div>
                    <div className="h-auto flex flex-col justify-center items-center gap-1.5 cursor-pointer md:hidden" onClick={handleNavOpen}>
                        <div 
                            className={`w-5 h-0.5 bg-white rounded-md transition-all ease-in-out duration-300 ${isNavOpen ? "rotate-45 translate-y-2" : ""}`}
                        >
                        </div>
                        <div 
                            className={`w-5 h-0.5 bg-white rounded-md transition-all ease-in-out duration-300 ${isNavOpen ? "opacity-0": ""}`}
                        >
                        </div>
                        <div 
                            className={`w-5 h-0.5 bg-white rounded-md transition-all ease-in-out duration-300 ${isNavOpen ? "-rotate-45 -translate-y-2" : ""}`}
                        >
                        </div>
                    </div>
                    

                    {/* MOBILE NAVIGATION */}
                    {isNavOpen && 
                        <div className="absolute text-white text-2xl font-semibold left-0 top-12 flex flex-col justify-start items-center bg-navbar opacity-95 w-full h-auto md:hidden">
                            <ul className=" flex flex-col items-center justify-start gap-6 w-full py-5" onClick={handleCloseNav}>
                                <NavLink to="/" style={({ isActive }) => isActive ? activeStyle : null} className="hover:underline underline-offset-2">
                                    Home
                                </NavLink>
                                <NavLink to="about" style={({ isActive }) => isActive ? activeStyle : null} className="hover:underline underline-offset-2">
                                    About
                                </NavLink>
                                <NavLink to="menu" style={({ isActive }) => isActive ? activeStyle : null} className="hover:underline underline-offset-2">
                                    Menu
                                </NavLink>
                                <NavLink to="contact" style={({ isActive }) => isActive ? activeStyle : null} className="hover:underline underline-offset-2">
                                    Contact Us
                                </NavLink>
                            </ul>
                        </div>
                    }

                    {/* DESKTOP NAVIGATION */}
                    <div className="hidden md:block">
                        <ul className="flex flex-row gap-12 text-white text-xl font-semibold">
                            <NavLink to="/" style={({ isActive }) => isActive ? activeStyle : null} className="hover:underline underline-offset-2">
                                Home
                            </NavLink>
                            <NavLink to="about" style={({ isActive }) => isActive ? activeStyle : null} className="hover:underline underline-offset-2">
                                About
                            </NavLink>
                            <NavLink to="menu" style={({ isActive }) => isActive ? activeStyle : null} className="hover:underline underline-offset-2">
                                Menu
                            </NavLink>
                            <NavLink to="contact" style={({ isActive }) => isActive ? activeStyle : null} className="hover:underline underline-offset-2">
                                Contact Us
                            </NavLink>
                        </ul>
                    </div>
                </div>
                
            </nav>
        </header>
    )
}