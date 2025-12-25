
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { CiTwitter } from "react-icons/ci";
import { SlSocialFacebook } from "react-icons/sl";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="flex justify-center bg-black/80 text-white">
            <div className="w-[95%] md:w-[80%]">
                <div className="flex items-center p-4">
                    <img
                        src="/pic/Layer.png"
                        alt="Logo"
                        className="w-[100px] md:w-[130px]"/>
                </div>

                {/* Content */}
                <div className="
                    flex flex-col gap-10 md:flex-row md:items-start md:justify-between border-y border-white p-4">
                    <div className="flex flex-col gap-5">
                        <h1 className="font-extrabold text-xl">Services</h1>
                        <div className="space-y-1">
                            <p>Bike and Rickshaw rental</p>
                            <p>Guided Tours of Lucca</p>
                            <p>Guided Bike Tour of Lucca</p>
                            <p>Trip In The Tuscan Hills</p>
                            <p>Transportation With Luxury Cars</p>
                            <p>Wine Tours By Bus With Guide</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-5">
                        <h1 className="font-extrabold text-xl">Home</h1>
                        <div className="space-y-1">
                            <p>Home</p>
                            <p>About Us</p>
                            <p>Tour Packages</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-5">
                        <h1 className="font-extrabold text-xl">Help</h1>
                        <div className="space-y-1">
                            <p>Terms of Use</p>
                            <p>Privacy Policy</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-5">
                        <h1 className="font-extrabold text-xl">Contacts</h1>
                        <div className="space-y-2">
                            <div className="flex items-start">
                                <span className="text-orange-400 mr-2 mt-1">
                                    <FaLocationDot />
                                </span>
                                <span>Piazza Napoleone, Lucca, Tuscany</span>
                            </div>
                            <div className="flex items-center">
                                <span className="text-orange-400 mr-2">
                                    <IoCall />
                                </span>
                                <span>+39 346 368 5708</span>
                            </div>
                            <div className="flex items-center">
                                <span className="text-orange-400 mr-2">
                                    <MdEmail />
                                </span>
                                <span>italiainlimo@gmail.com</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-5">
                        <h1 className="font-extrabold text-xl">Social Media</h1>
                        <div className="flex gap-4">
                            <div className="w-[40px] h-[40px] rounded-full bg-orange-400 flex items-center justify-center">
                                <CiTwitter />
                            </div>
                            <div className="w-[40px] h-[40px] rounded-full bg-orange-400 flex items-center justify-center">
                                <SlSocialFacebook />
                            </div>
                            <div className="w-[40px] h-[40px] rounded-full bg-orange-400 flex items-center justify-center">
                                <FaInstagram />
                            </div>
                        </div>
                    </div>
                </div>  
                <div className="flex items-center justify-center p-4 text-center text-sm">
                    <p>Copyright © 2022. All rights reserved.</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
