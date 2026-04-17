import {Link} from "react-router-dom"

export default function Footer() {
    return(
        <footer className="bg-navbar h-auto py-5 px-5 pt-10 text-white flex flex-col gap-10">
            <div className="flex flex-col gap-8 sm:flex-row sm:justify-around">
                <div className="flex flex-col gap-3">
                    <h6 className="text-lg underline underline-offset-2 font-semibold">Explore</h6>
                    <Link to="/">Home</Link>
                    <Link to="about">About Us</Link>
                    <Link to="menu">Our Menu</Link>
                    <Link to="contact">Contact Us</Link>
                </div>
                <div className="flex flex-col gap-2">
                    <h6 className="text-lg underline underline-offset-2 font-semibold">Visit Us</h6>
                    <p>RJ Bakery 'n Sweets</p>
                    <p>#42, 3rd Main, 4th Cross Road</p>
                    <p>Near Vaikunta Temple</p>
                    <p>Giridhar Nagar, Mysore - 777777</p>
                </div>
                <div className="flex flex-col gap-2">
                    <h6 className="text-lg underline underline-offset-2 font-semibold">Contact Us</h6>
                    <p>Call Us: +91 11111 11111 </p>
                    <p>Email: hello@rjbakery.com</p>
                </div>
                <div>
                    <h6 className="text-lg underline underline-offset-2 font-semibold">Opening Hours</h6>
                    <p>We are Open Everyday!</p>
                    <p>Monday - Sunday</p>
                    <p>7:00 AM – 10:00 PM</p>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center">
                <p>&copy;2026 RJ Bakery 'n Sweets. All Rights Reserved. Developed By Sharvani R.</p>
            </div>
        </footer>
    )
}