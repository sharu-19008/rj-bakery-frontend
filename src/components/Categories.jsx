    export default function Categories({setSearchParams, categoryList}){

        function handleCategoryClick(categoryValue){
            setSearchParams({category: categoryValue})
        }

        const categoriesListElements = Object.entries(categoryList).map(([categoryName, categoryValue], index)=>{
            return(
                <button
                    key={index}
                    onClick={()=>handleCategoryClick(categoryValue)}
                    className="p-2 bg-menubuttonbg h-11 min-w-45 hover:cursor-pointer font-bold text-navbar text-lg md:min-w-43 md:text-lg  md:h-12 lg:min-w-55 lg:text-xl xl:min-w-60 xl:text-2xl"
                >
                    {categoryName}
                </button>
            )
        })

        return(
            <div className="flex flex-row  gap-5 w-full md:flex-col md:items-center md:gap-10 md:mb-5   ">
                {categoriesListElements}
            </div>  
        )
    }