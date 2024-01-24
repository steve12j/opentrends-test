import brandLogo from "@/assets/brand-logo.png";
import bagIcon from "@/assets/shopping.png";
import { useNavigate } from "react-router-dom";


const Navbar = () => {
    const navigate = useNavigate();

    return (
        <nav>
            <div className='w-full fixed top-0 z-30 py-4 bg-white   '>
                <div className='w-[85%] mx-auto flex justify-between items-center'>
                    <div 
                    className='flex items-center gap-1 cursor-pointer'
                    onClick={()=>navigate("/")}
                     >
                        <img src={brandLogo} alt="brand_logo" className="w-[44px] h-[44px]" />
                        <p className="text-3xl font-bold text-blue-300 ">Brand</p>
                    </div>
                    <div className="">
                        <button 
                        onClick={()=>{navigate('/cart')}}
                        className="flex flex-col justify-center items-center gap-1 hover:opacity-80"
                        >
                            <img src={bagIcon} alt="cart_icon" className="h-[21px] w-[21px] " />
                            <p className=" text-gray-400 text-[12px] " >My Cart</p>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar