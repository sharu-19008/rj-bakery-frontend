import {useNavigate} from "react-router-dom"
import {motion} from "framer-motion"

import Breads from "../assets/food_categories/breads_and_buns.webp"
import Biscuits from "../assets/food_categories/biscuits_and_cookies.webp"
import Cakes from "../assets/food_categories/pastries.webp"
import IceCreams from "../assets/food_categories/ice_creams.webp"
import Sweets from "../assets/food_categories/sweets.webp"
import Snacks from "../assets/food_categories/snacks.webp"
import Cupcakes from "../assets/food_categories/cupcakes.webp"
import HotDrinks from "../assets/food_categories/hot_drinks.webp"
import ColdDrinks from "../assets/food_categories/cool_drinks.webp"

export default function Menu() {

    const navigate = useNavigate();

    const categoryObjects = [
        {
            title: "Breads & Buns",
            img:Breads,
            name: "breads-and-buns",
        },
        
        {
            title:"Cakes & Pastries",
            img:Cakes,
            name: "cakes-and-pastries",
        },
        {
            title:"Cupcakes",
            img:Cupcakes,
            name:"cupcakes",
        },
        {
            title: "Biscuits & Cookies",
            img:Biscuits,
            name:"biscuits-and-cookies",
        },
        {
            title: "Sweets",
            img:Sweets,
            name:"sweets",
        },
        {
            title:"Evening Snacks",
            img:Snacks,
            name:"snacks",
        },
        {
            title:"Hot Beverages",
            img:HotDrinks,
            name:"hot-beverages",
        },
        {
            title:"Cold Beverages",
            img:ColdDrinks,
            name:"cold-beverages",
        },
        {
            title: "Ice Creams",
            img:IceCreams,
            name:"ice-creams",
        },    
    ]

    function handleCategoryClick(categoryName){
        navigate(`/menu/products/?category=${categoryName}`)
    }

    const categoryElements = categoryObjects.map((category,index)=>{
        return (            
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{
                    opacity: 1,
                    y: 0,
                    transition: {
                        delay: index * 0.3,
                        duration: 1,
                        ease: "easeOut"
                    }
                }}
                key={index} 
                onClick={()=>handleCategoryClick(category.name)}
                className="w-full relative group border-b-2 border-bakerybg1 cursor-pointer md:p-4" 
            >
                <img 
                    src={category.img} 
                    alt={`Image of ${category.title}`} 
                    className="brightness-55 w-full h-60 sm:h-100 md:brightness-70 md:group-hover:brightness-40 md:h-70 lg:h-90"
                />
                <p className="absolute inset-0 opacity-100 flex items-center justify-center transition-all duration-800 ease-in-out text-white font-semibold text-2xl sm:text-3xl md:opacity-0 md:group-hover:opacity-100 md:text-xl lg:text-2xl xl:text-3xl">{category.title}</p>
            </motion.div>
        )
    }) 

    return(
        <section className="flex flex-col md:py-4">
            <div className="grid grid-cols-1 place-items-center w-full md:grid-cols-3">
                {categoryElements}
            </div>
        </section>
    )
}