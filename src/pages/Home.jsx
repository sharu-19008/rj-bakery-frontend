import {Link} from "react-router-dom"
import {motion} from "framer-motion"
import BackgroundImage from "../assets/logos_and_bg/bg.webp"
import Name from "../assets/logos_and_bg/business-name2.webp"
import Logo from "../assets/logos_and_bg/logo1.webp"
export default function Home() {

    const bgImage = {
        backgroundImage: `url(${BackgroundImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
    }

    return (
        <section 
            style={bgImage}
            className="grow flex flex-col items-center justify-around p-4 h-lvh md:h-auto gap-20"
        >
            <div className="flex flex-col items-center justify-center gap-5">
                <motion.img 
                    initial={{opacity: 0}}
                    animate={{
                        opacity: 1,
                    }}
                    transition={{
                        delay: 0.5,
                        duration: 1,
                        type: 'spring',
                        stiffness: 180
                    }}

                    src={Name} 
                    alt="Image of bakery name - Welcome to RJ Bakery 'n Sweets"
                    className="w-100 min-h-auto md:w-100 lg:w-120"
                />
                <motion.img 
                    initial={{scale: 0}}
                    animate={{
                        scale: 1,
                    }}
                    transition={{
                        delay: 1.5,
                        duration: 1,
                        type: 'spring',
                        stiffness: 180
                    }}

                    src={Logo} 
                    alt="Logo of RJ Bakery 'n Sweets"
                    className="w-100 min-h-auto sm:w-120 md:w-140 lg:w-130"
                />
            </div>

            <Link to="menu">
                <motion.button 
                    initial={{opacity: 0}}
                    animate={{
                        opacity: 1,
                        transition:{
                            delay: 2.5,
                            duration: 0.5,  
                        }
                    }}
                    whileHover={{
                        boxShadow: "0px 0px 8px rgb(255,0,0)",
                        scale:1.1,
                    }}

                    className="cursor-pointer w-70 h-13 text-lg sm:w-80 md:w-90 md:h-15 md:text-2xl lg:w-100 lg:h-18 lg:text-4xl p-2 font-quicksand font-semibold text-white bg-explore-button-color flex flex-col justify-center items-center active:bg-red-900"
                >
                        Explore Our Menu
                </motion.button> 
            </Link>
            
        </section>
    )
}