import Logo from "../assets/logos_and_bg/logo2.webp"
import {motion} from "framer-motion"
export default function Contact() {
    return (
        <section className="px-7 py-5 flex flex-col gap-10 items-center font-medium md:px-10">
            {/* <h1 className="w-full h-10 bg-red-400 text-xl text-white font-bold flex justify-center items-center">RJ Bakery 'n Sweets</h1> */}
            <div className="flex flex-col items-center gap-3">
                <motion.img 
                    initial={{opacity:0}}
                    animate={{opacity:1, 
                        transition:{
                            delay:0.5,
                            duration:1
                        }
                    }}
                    src={Logo} 
                    alt="Logo" 
                    height="500" 
                    width="500" 
                />
                <motion.p 
                    initial={{opacity:0}}
                    animate={{opacity:1, 
                        transition:{
                            delay:1,
                            duration:1
                        }
                    }}
                    className="text-lg text-justify"
                >
                    We are your everyday neighborhood bakery, serving up the perfect mix of classic, comforting bakes and exciting new flavors. We know that every generation has its own favorite craving, which is why we’ve built a menu that offers the best of both worlds. Whether you are looking for the nostalgic taste of a classic tea-time snack or a modern, Western-style treat to enjoy with friends, you'll find it fresh in our counters every single day.
                </motion.p>
            </div>
            
            <div id="contact" className="grid grid-cols-1 gap-5 w-full sm:grid-cols-2 md:grid-cols-3 md:justify-items-center md:items-start  ">
                <motion.div 
                    className="flex flex-col gap-2"
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
                >
                    <h6 className="text-lg underline underline-offset-2 font-semibold">Visit Us</h6>
                    <p>RJ Bakery 'n Sweets</p>
                    <p>#42, 3rd Main, 4th Cross Road</p>
                    <p>Near Vaikunta Temple</p>
                    <p>Giridhar Nagar, Mysore - 777777</p>
                </motion.div>
                <motion.div 
                    className="flex flex-col gap-2"
                    initial={{scale: 0}}
                    animate={{
                        scale: 1,
                    }}
                    transition={{
                        delay: 2,
                        duration: 1,
                        type: 'spring',
                        stiffness: 180
                    }}
                    >
                    <h6 className="text-lg underline underline-offset-2 font-semibold">Contact Us</h6>
                    <p>📞Call Us: +91 11111 11111</p>
                    <p>✉️Email: demohelp@rjbakery.com</p>   
                </motion.div>
                
                <motion.div
                    className="flex flex-col gap-2"
                    initial={{scale: 0}}
                    animate={{
                        scale: 1,
                    }}
                    transition={{
                        delay: 2.5,
                        duration: 1,
                        type: 'spring',
                        stiffness: 180
                    }}
                >
                    <h6 className="text-lg underline underline-offset-2 font-semibold">Opening Hours</h6>
                    <p>🚪We are Open Everyday!</p>
                    <p>📆Monday - Sunday</p>
                    <p>⏰7:00 AM – 10:00 PM</p>
                </motion.div>
            </div>





        </section>
    )
}