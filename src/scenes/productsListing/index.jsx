import { ChevronUpIcon } from "@heroicons/react/24/solid"
import img1 from "@/assets/img1.png"
import Product from "@/components/Product"


const ProductsListing = () => {
    return (
        <section
            className='mt-[117px]
            w-full'
        >
            <div className='w-[85%] mx-auto flex flex-col sm:flex-row gap-6 '>

                {/* LEFT SIDE */}
                <div className="flex flex-row sm:flex-col gap-6 ">
                    <div className='w-[240px] text-sm flex flex-col gap-4 pt-2 border-t-[1px] border-gray-400 '>
                        <div className='text-black flex justify-between items-center font-semibold '>
                            <p>Category</p>
                            <button className="text-gray hover:opacity-80 ">
                                <ChevronUpIcon className="h-4 w-4  text-gray-600" />
                            </button>
                        </div>
                        <div className='text-gray-600  flex flex-col gap-2'>
                            <p className="cursor-pointer hover:opacity-80">Mobile <a href=""></a>ccessory</p>
                            <p className="cursor-pointer hover:opacity-80">Electronics</p>
                            <p className="cursor-pointer hover:opacity-80">Smartphones</p>
                            <p className="cursor-pointer hover:opacity-80">Mordern tech</p>
                            <p className='text-blue-500 hover:opacity-80 cursor-pointer'>See all</p>
                        </div>
                    </div>
                    <div className='w-[240px]  text-sm flex flex-col gap-4 pt-2 border-t-[1px] border-gray-400 '>
                        <div className='text-black flex justify-between items-center font-semibold '>
                            <p>Brands</p>
                            <button className="text-gray hover:opacity-80 ">
                                <ChevronUpIcon className="h-4 w-4  text-gray-600" />
                            </button>
                        </div>
                        <div className='text-gray-600  flex flex-col gap-2'>
                            <div className="flex gap-4  items-center hover:opacity-80 cursor-pointer">
                                <input
                                    id="checked-checkbox"
                                    type="checkbox"
                                    value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-lg focus:ring-blue-500  focus:ring-2"
                                />
                                <label htmlFor="checked-checkbox" className=" text-sm text-black cursor-pointer ">Samsung</label>
                            </div>
                            <div className="flex gap-4  items-center hover:opacity-80 cursor-pointer">
                                <input
                                    id="checked-checkbox"
                                    type="checkbox"
                                    value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-lg focus:ring-blue-500  focus:ring-2"
                                />
                                <label htmlFor="checked-checkbox" className=" text-sm text-black cursor-pointer ">Apple</label>
                            </div>
                            <div className="flex gap-4  items-center hover:opacity-80 cursor-pointer">
                                <input
                                    id="checked-checkbox"
                                    type="checkbox"
                                    value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-lg focus:ring-blue-500  focus:ring-2"
                                />
                                <label htmlFor="checked-checkbox" className=" text-sm text-black cursor-pointer ">Huawei</label>
                            </div>
                            <div className="flex gap-4  items-center hover:opacity-80 cursor-pointer">
                                <input

                                    id="checked-checkbox"
                                    type="checkbox"
                                    value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-lg focus:ring-blue-500  focus:ring-2"
                                />
                                <label htmlFor="checked-checkbox" className=" text-sm text-black cursor-pointer ">Pocco</label>
                            </div>
                            <div class="flex gap-4  items-center hover:opacity-80 ">
                                <input
                                    id="checked-checkbox"
                                    type="checkbox"
                                    value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-lg focus:ring-blue-500  focus:ring-2"
                                />
                                <label htmlFor="checked-checkbox" className=" text-sm text-black cursor-pointer ">Lenova</label>
                            </div>
                        </div>
                    </div>

                </div>
                {/* RIGHT SIDE  */}
                <div className="flex-1">
                    <div className="wrapper">
                        <Product 
                            image={img1}
                            price={"1128.00"}
                            discountPrice={"99.00"}
                            discription={"GoPro HERO6 4K Action Camera - Black"}
                        />
                        <Product 
                            image={img1}
                            price={"1128.00"}
                            discountPrice={"99.00"}
                            discription={"GoPro HERO6 4K Action Camera - Black"}
                        />
                        <Product 
                            image={img1}
                            price={"1128.00"}
                            discountPrice={"99.00"}
                            discription={"GoPro HERO6 4K Action Camera - Black"}
                        />
                        <Product 
                            image={img1}
                            price={"1128.00"}
                            discountPrice={"99.00"}
                            discription={"GoPro HERO6 4K Action Camera - Black"}
                        />
                        <Product 
                            image={img1}
                            price={"1128.00"}
                            discountPrice={"99.00"}
                            discription={"GoPro HERO6 4K Action Camera - Black"}
                        />
                        <Product 
                            image={img1}
                            price={"1128.00"}
                            discountPrice={"99.00"}
                            discription={"GoPro HERO6 4K Action Camera - Black"}
                        />
                        <Product 
                            image={img1}
                            price={"1128.00"}
                            discountPrice={"99.00"}
                            discription={"GoPro HERO6 4K Action Camera - Black"}
                        />
                        <Product 
                            image={img1}
                            price={"1128.00"}
                            discountPrice={"99.00"}
                            discription={"GoPro HERO6 4K Action Camera - Black"}
                        />
                        <Product 
                            image={img1}
                            price={"1128.00"}
                            discountPrice={"99.00"}
                            discription={"GoPro HERO6 4K Action Camera - Black"}
                        />
                    </div>

                </div>

            </div>
        </section>
    )
}

export default ProductsListing