import {useState, memo} from "react"
import API from "../services/api"
import {motion} from "framer-motion"
import { FaStar, FaRegStar, FaRegSquare, FaCircle,  } from "react-icons/fa";
import { IoTriangle } from "react-icons/io5";


function ProductCard({food, setFoodList, index}){
    const [hoveredStars, setHoveredStars ] = useState(0)
    const [productRated, setProductRated] = useState(()=>{
        const rated = JSON.parse(sessionStorage.getItem('ratedProducts') || '{}') 
        return Boolean(rated[food.id])
    })

    const hoveredStarValue = hoveredStars[food.id] || 0
    const displayRating = hoveredStarValue || Math.floor(food.average_rating)

    const FoodIcon = ({type}) => {
        if(type === "non-veg" || type === "egg") {
            return(
                <div className="relative flex items-center justify-center">
                    <FaRegSquare size={20} strokeWidth={3} className="text-[#804040]" />
                    <IoTriangle size={10} className="absolute text-[#804040]" />
                </div>
            )
        } 
        if(type === "veg") {
            return (
                <div className="relative flex items-center justify-center">
                    <FaRegSquare size={20} strokeWidth={3} className="text-[#008134]"  />
                    <FaCircle size={10} className="absolute text-[#008134]" />
                </div>
            )
        }
    }

    const handleStarClick = async (productId, starClicked) => {
    // console.log("Star "+ starClicked + " Clicked for product " + productId)
    const ratedProducts = JSON.parse(sessionStorage.getItem('ratedProducts') || '{}')
    ratedProducts[productId] = true
    sessionStorage.setItem('ratedProducts', JSON.stringify(ratedProducts))
    setProductRated(true)

    try {
        const response = await API.post(`/products/${productId}/rate/`, {rating: starClicked})
        setFoodList((prevList)=>{
            return prevList.map((food)=>{
                return food.id === productId ?
                {... food,
                    average_rating: response.data.average_rating,
                    total_no_of_ratings: response.data.total_no_of_ratings
                } : food
            })
        })
    } catch (error){
        console.log("Rating Failed! - ", error)
    }
}

    return (
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
                delay: index * 0.05,
                duration: 0.4,
                ease: "easeOut"
            }}
            key={food.id} 
            className="h-full flex flex-col outline-1 outline-gray-400 rounded-xl w-70 sm:h-95 md:w-60"
        >
            <img 
                src={food.image} 
                alt={`Image of ${food.name}`} 
                loading="lazy" 
                className="h-44 w-full shrink-0 object-fill rounded-t-xl" 
            />
            <div className="food-details flex flex-col h-full p-3 gap-2">
                <div className="flex gap-2">
                    <FoodIcon type={food.food_type} />
                    <p>{food.food_type === "veg" && `Veg` || food.food_type === "non-veg" && `Non - Veg` || food.food_type === "egg" && `Contains only egg`}</p>
                </div>
                <div className="flex flex-row gap-1">
                    <div className="flex flex-row justify-center items-center gap-1">
                        <p className="font-semibold">{Number(food.average_rating).toFixed(1)}</p>
                        {
                            [...Array(5)].map((_,index) => {
                                const starNumber = index + 1
                                const isFilled = starNumber <= displayRating;
                                const StarIcon = isFilled ? FaStar : FaRegStar;
                                return(
                                    
                                    <StarIcon 
                                    key={index} 
                                    size={18} 
                                    className={` ${productRated ? 'text-gray-300 cursor-not-allowed' : 'cursor-pointer text-yellow-500'} `}
                                    title={`${productRated ? '' : 'Click to rate'}`}
                                    onMouseEnter={()=>!productRated && setHoveredStars(prev => ({...prev, [food.id]:starNumber}))}
                                    onMouseLeave={()=>!productRated && setHoveredStars(prev => ({...prev, [food.id]:0}))}
                                    onClick={()=> productRated === false && handleStarClick(food.id,starNumber)}
                                    onTouchEnd={()=>productRated === false && handleStarClick(food.id, starNumber)}
                                    style={{touchAction: 'manipulation'}}
                                    />
                                )
                            })
                        }
                    </div>
                    <p>({Number(food.total_no_of_ratings)})</p>
                </div>
                <p className={`${productRated ? 'hidden' : 'block text-xs font-light md:hidden '}`}>
                    {productRated ? '' : 'Tap to Rate'}
                </p>
                <p className="font-semibold text-lg">{food.name}</p>
                <p className="font-semibold">&#8377;{food.price}</p>
                <p className={`font-bold mt-auto ${food.is_available ? 'text-green-600' : 'text-gray-500' } `}>{food.is_available ? `In Stock` : `Out of Stock`}</p>
            </div>
        </motion.div>
    )
}

export default memo(ProductCard)