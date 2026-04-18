import {useState, useEffect} from "react"
import API from "../services/api"

import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";

import ProductCard from "./ProductCard";

export default function ItemsList({category, categoryList}) {

    const BASE_URL = 'http://127.0.0.1:8000';
    const categoryName = Object.keys(categoryList).find((key)=>categoryList[key] === category)

    const [foodList, setFoodList] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [pageUrl, setPageUrl] = useState(
        {
            next: null,
            prev: null
        }
    )
    const [sortBy, setSortBy] = useState("")


    useEffect(()=>{
        const fetchProductsData = async () =>{
            setIsLoading(true)
            setPageUrl({ next: null, prev: null });
            try{
                let url = `/products/?category=${category}`
                if(sortBy) url += `&sort=${sortBy}`
                const response = await API.get(url)
                setFoodList(response.data.results || response.data)
                setPageUrl({next: response.data.next, prev: response.data.previous})
            } catch (error) {
                setIsLoading(false)
                console.log("Couldn't fetch products! ",error)
            } finally {
                setIsLoading(false)
            }
        }
        if(category){
            fetchProductsData();
        }
        else{
            setIsLoading(false)
            console.log("Couldn't load page!")
        }
    },[category,sortBy])

    const loadPage = async (url) => {
        if(!url) return
        setIsLoading(true)
        try {
            const res = await API.get(url)
            setFoodList(res.data.results)
            setPageUrl({next: res.data.next, prev: res.data.previous})

            setTimeout(() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }, 100);
            

        } catch(error) {
            console.log("Page load error: ", error)
        } finally {
            setIsLoading(false)
        }
    }


    const foodProductsList = foodList.map((food,index)=>{
        return(
            <ProductCard key={food.id} food={food} BASE_URL={BASE_URL} setFoodList={setFoodList} index={index} />
        )
    })

    return(
        <>
            {isLoading ? 
                (
                    <div className="w-full grid grid-cols-1 place-items-center-safe gap-7 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
                        {[...Array(12)].map((_, index)=>{
                            return (
                                <div key={index} className="h-auto outline-1 outline-gray-300 rounded-xl animate-pulse w-70 md:w-50">
                                    <div className="h-44 w-full bg-gray-200 rounded-t-xl"></div>
                                    <div className="h-16 bg-gray-100 rounded-b-xl"></div>
                                </div>
                            )
                        })}
                    </div>
                    
                ) : foodList.length > 0 ? 
                (
                    <div className="flex flex-col items-center gap-5 w-full ">
                        <h1 className=" text-center text-3xl sm:text-4xl md:text-5xl  lg:text-5xl text-navbar font-semibold">{categoryName}</h1>
                        <div className=" px-10 w-full flex justify-end">
                            <select id="sort" name="sort" value={sortBy} onChange={(e)=>setSortBy(e.target.value)} className="bg-white p-2" autoComplete="off">
                                <option value="" disabled>Sort By</option>
                                <option value="rating_desc">Top Rated</option>
                                <option value="name_asc">Name: A→Z</option>
                                <option value="name_desc">Name: Z→A</option>
                                <option value="price_low">Price: Low to High </option>
                                <option value="price_high">Price: High to Low </option>
                            </select>
                        </div>
                        <div>
                            <div className="w-full grid grid-cols-1 place-items-center-safe gap-7 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
                                {foodProductsList}
                            </div>
                            <div className="flex justify-between my-8 w-full px-15">
                                <div>
                                    {pageUrl.prev && (
                                        <button onClick={()=>loadPage(pageUrl.prev)} className="flex justify-center items-center gap-2 text-gray-500 font-semibold text-base cursor-pointer hover:text-shadow-lg/20 text-shadow-black "><FaArrowLeftLong className="text-gray-500" />Previous Page</button>
                                        
                                    
                                    )}
                                </div>
                                <div>
                                    {pageUrl.next && (
                                        <button onClick={()=>loadPage(pageUrl.next)} className="flex justify-center items-center gap-2 text-gray-500 font-semibold text-base cursor-pointer hover:text-shadow-lg/20 text-shadow-black ">Next Page <FaArrowRightLong size={20} className="text-gray-500" /></button>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                ) 
                : 
                (
                    <h1 className="mt-5 p-4 text-xl text-black font-extrabold text-center sm:text-2xl md:text-3xl">Sorry! Our items are still cooking. Please come again later...</h1>
                )
            }
        </>
    )
}