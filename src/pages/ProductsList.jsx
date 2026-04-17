import { useSearchParams } from "react-router-dom"

import Categories from "../components/Categories"
import ItemsList from "../components/ItemsList"

export default function ProductsList() {

    const [searchParams, setSearchParams] = useSearchParams();
    const categoryName = searchParams.get("category")

    const categoryList = {
        "Breads & Buns" : "breads-and-buns",
        "Cakes & Pastries": "cakes-and-pastries",
        "Cupcakes": "cupcakes",
        "Biscuits & Cookies": "biscuits-and-cookies",
        "Sweets" : "sweets",
        "Snacks": "snacks",
        "Hot Beverages": "hot-beverages",
        "Cold Beverages": "cold-beverages",
        "Ice Creams": "ice-creams"
    }

    return (
        <section className="flex flex-col md:flex-row md:h-screen">
            <div className=" p-4 flex flex-col items-center w-full md:w-1/4 md:bg-bg-menu md:h-full md:overflow-y-auto xl:w-1/5 ">
                <h1 className="font-bold text-3xl">Our Menu</h1>
                <div className="pt-5 flex flex-col items-center w-full overflow-x-auto md:overflow-x-visible ">
                    <Categories setSearchParams={setSearchParams} categoryList={categoryList} />
                </div>
            </div>

            <div className="md:flex-1 md:h-full md:overflow-y-auto md:py-5">
                <ItemsList category={categoryName} categoryList={categoryList} />
            </div>
        </section>
    )
}