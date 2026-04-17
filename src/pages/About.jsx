import {motion} from "framer-motion"
import Logo from "../assets/logos_and_bg/logo1.webp"

export default function About() {

    const bgImage = {
            backgroundImage: `url(${Logo})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "100%",
            backgroundPosition: "center",
        }

    return (
        <section className="relative h-auto w-full flex flex-col mb-20 px-7 py-5 gap-10 md:px-40 md:w-full">
            
            <div 
                className="absolute inset-0 bg-no-repeat bg-center bg-contain opacity-15 pointer-events-none lg:top-5"
                style={{ backgroundImage: `url(${Logo})` }}
            ></div>

            
            <div className="relative z-10">
                <h1 className="text-navbar font-bold text-3xl lg:text-5xl lg:mt-5">
                    About Us
                </h1>
                <hr className="text-navbar border-t-2" />
            </div>

            <div className="flex flex-col gap-10 text-justify" >
                <p className="text-xl font-semibold lg:text-2xl">
                    From the warm aroma of freshly baked breads, buttery pastries, and heavenly sweets, to the crunch of cookies and the spice of samosas and chaats.
                </p>
                
                <p className="text-xl font-semibold lg:text-2xl">
                    From refreshing cold milkshakes and creamy ice creams, to the comfort of hot coffee and tea.
                </p>
                
                <p className="text-xl font-semibold lg:text-2xl">
                    We've got something to satisfy every craving
                </p>
                <div className="flex flex-col text-xl gap-5 lg:text-2xl ">
                    <motion.p 
                        initial={{opacity:0}}
                        animate={{opacity:1, 
                            transition:{
                                delay:0.5,
                                duration:1
                            }
                        }}
                    >
                        ✨ Fresh every morning – Breads, pastries, and cakes baked from scratch.
                    </motion.p>

                    <motion.p 
                        initial={{opacity:0}}
                        animate={{opacity:1, 
                            transition:{
                                delay:1,
                                duration:1
                            }
                        }}
                    >
                        🍪 Crunchy & spicy – Cookies, samosas, chaats, and savoury snacks.
                    </motion.p>

                    <motion.p 
                        initial={{opacity:0}}
                        animate={{opacity:1, 
                            transition:{
                                delay:1.5,
                                duration:1
                            }
                        }}
                    >🥤 Cool & creamy – Milkshakes, fruit juices, and ice creams.
                    </motion.p>

                    <motion.p 
                        initial={{opacity:0}}
                        animate={{opacity:1, 
                            transition:{
                                delay:2,
                                duration:1
                            }
                        }}
                    >
                        ☕ Warm & cozy – Coffee, tea, Horlicks, and hot milk.
                    </motion.p>

                    <motion.p
                        initial={{opacity:0}}
                        animate={{opacity:1, 
                            transition:{
                                delay:2.5,
                                duration:1
                            }
                        }}
                    >
                        🎉 For every occasion – Birthdays, celebrations, or just because.
                    </motion.p>

                    <motion.p
                        initial={{opacity:0}}
                        animate={{opacity:1, 
                            transition:{
                                delay:3,
                                duration:1
                            }
                        }}
                    >
                        ❤️ Made with love – Traditional recipes, premium ingredients.
                    </motion.p>
                </div>

                <motion.p 
                    initial={{opacity:0}}
                    animate={{opacity:1, 
                        transition:{
                            delay:3.5,
                            duration:3
                        }
                    }}
                    className="text-xl font-semibold lg:text-2xl"
                >
                    We at RJ Bakery 'n Sweets welcome you to enjoy the world of flavors, an experience that keeps you craving for more – freshly baked, freshly made, and always delicious.
                </motion.p>
            </div>
        </section>
    )
}