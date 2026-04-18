import {Link} from "react-router-dom"

export default function Page404() {
    return(
        <div className="w-full flex justify-center items-center h-100">
            <div className=" w-full h-auto p-8 flex flex-col gap-8 sm:w-100 md:w-150 lg:w-200 lg:gap-10 ">
                <h1 className="text-xl font-bold text-justify sm:text-2xl md:text-3xl lg:text-4xl">Sorry. The page you are looking for doesn't exist!</h1>
                <Link to="/" className="w-full font-semibold text-xl bg-black text-white text-center rounded-md h-12 flex justify-center items-center hover:text-gray-200">Return to Home</Link>
            </div>
        </div>
    )
}