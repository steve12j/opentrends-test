import brandLogo from "@/assets/brand-logo.png";
import google_play_icon from "@/assets/google-play-icon.png";
import appStoreIcon from "@/assets/app-store.png";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";


const Footer = () => {
    return (
        <>
            <footer >
                <div className='pt-4 pb-8 mt-16 w-full  relative bg-white '>
                <div className="w-[85%] mx-auto py-[40px] flex flex-col sm:flex-row sm:justify-between sm:gap-0 gap-20  items-center ">
                    <div className="flex flex-col gap-4 max-w-[276px]">
                        <div
                            className='flex items-center gap-1 cursor-pointer'
                            onClick={() => navigate("/")}
                        >
                            <img src={brandLogo} alt="brand_logo" className="w-[44px] h-[44px]" />
                            <p className="text-3xl font-bold text-blue-300 ">Brand</p>
                        </div>
                        <p className="text-gray-600">Best information about the company gies here but now lorem ipsum is</p>
                        <div className="flex gap-3">
                            <button className="rounded-full w-8 h-8 bg-gray-400 flex justify-center items-center">
                                <FaFacebookF className="text-white" />
                            </button>
                            <button className="rounded-full w-8 h-8 bg-gray-400 flex justify-center items-center">
                                <FaTwitter className="text-white" />
                            </button>
                            <button className="rounded-full w-8 h-8 bg-gray-400 flex justify-center items-center">
                                <FaLinkedinIn className="text-white" />
                            </button>
                            <button className="rounded-full w-8 h-8 bg-gray-400 flex justify-center items-center">
                                <FaSquareInstagram className="text-white" />
                            </button>
                            <button className="rounded-full w-8 h-8 bg-gray-400 flex justify-center items-center">
                                <FaYoutube className="text-white" />
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2 mr-[40px]">
                        <p className="text-sm font-bold text-black">Get App</p>
                        <button className="hover:opacity-80">
                            <img src={appStoreIcon} alt="app_store_icon" className="w-[124px]" />
                        </button>
                        <button className="hover:opacity-80">
                            <img src={google_play_icon} alt="google_play_icon" className="w-[124px]" />
                        </button>
                    </div>
                </div>
                </div>
                <div className=" w-full  flex justify-center  items-center hover:opacity-80 p-4 bg-gray-300">
                    <p className="inline-block text-sm text-gray-600 cursor-pointer ">&#169; 2024 Ecommerce. </p>
                </div>
            </footer>
        </>

    )
}

export default Footer