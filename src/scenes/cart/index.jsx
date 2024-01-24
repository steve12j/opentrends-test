import React, { useEffect, useState } from 'react'
import ReactStars from 'react-stars'

const Cart = () => {
    const [productIds, setProductIds] = useState([]);
    const [productsDetail, setProductsDetail] = useState([]);
    const [totalPrice, setTotalPrice] = useState([]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/carts/1").then(async (res) => {
            const data = await res.json();
            setProductIds(data?.products)
        })
    }, [])

    const ratingChanged = (newRating) => {
        console.log(newRating)
      }

    useEffect(() => {
        if (productIds.length) {

            const fetchProductDetails = async () => {
                try {
                    const fetchDataPromises = productIds.map(async (product) => {
                        const response = await fetch(`https://fakestoreapi.com/products/${product.productId}`);
                        const result = await response.json();
                        return { ...result, qty: product?.quantity };
                    });

                    const results = await Promise.all(fetchDataPromises);
                    const totalPrice = results.reduce((total, priceDetails) => {
                        return total + priceDetails.price * priceDetails.qty
                    }, 0)

                    setTotalPrice(totalPrice)
                    setProductsDetail(results);
                } catch (error) {
                    console.error('Error fetching data:', error);
                }
            };

            fetchProductDetails();
        }


    }, [productIds])

    const cartDetailsElemets = !!productsDetail.length && productsDetail?.map(details => (
        <div key={details.id} className='flex justify-between items-center  border-b-[1px] border-gray-300 py-2 '>
            <div className='flex gap-2'>
                <div>
                    <img src={details.image} alt="" className='h-[80px] w-[80px]' />
                </div>
                <div className='flex flex-col gap-1 '>
                    <p className='text-sm text-black mb-1'>{details.title}</p>
                    <p className='text-sm text-gray-600'>Size: medium, Color: blue,  Material: Plastic</p>
                    <p className='text-sm text-gray-600'>Seller: Artel Market</p>
                    <div className='flex gap-1 mt-1'>
                        <button type="button" className="text-red-500 border  bg-white hover:bg-gray-200 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-2 py-1.5 me-2 mb-2   focus:outline-none ">Remove</button>
                        <button type="button" className="text-blue-500 border  bg-white hover:bg-gray-200 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-2 py-1.5 me-2 mb-2   focus:outline-none ">Save for later</button>
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-1'>
                <p className='text-sm font-medium'>${details.price}</p>
                <select id="countries" value={details?.qty} name="quantity" class="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  ">
                    <option >Choose a qty</option>
                    <option value={`${details?.qty}`}>{details?.qty}</option>
                </select>
                <div className='flex gap-1 items-center '>
                    <ReactStars
                        count={5}
                        value={details.rating.rate}
                        size={20}
                        color2={'#ffd700'} />
                    <p className='text-sm text-red-500'>{details.rating.rate}</p>
                </div>
            </div>
        </div>
    ))



    return (
        <section className='mt-[113px] mx-auto w-[85%] flex flex-col gap-3'>
            <p className='text-black font-bold text-2xl '>My cart ({productsDetail.length})</p>
            <div className=' flex gap-2'>
                <div className='flex flex-col gap-1 bg-white w-[70%] p-5 rounded'>
                    {cartDetailsElemets}


                    <button type="button" className="text-white border w-[150px]  bg-blue-500 hover:bg-gray-200 focus:ring-4 focus:ring-gray-200 font-medium rounded text-sm px-2 py-2 me-2 mb-2 mt-5   focus:outline-none ">Back To Shop</button>
                </div>
                <div className='bg-white h-[302px] flex-1 p-5 rounded'>
                    <div className='p-2 border-b border-gray-300 flex items-center justify-between '>
                        <div className='flex flex-col gap-1'>
                            <p className='text-sm text-gray-600'>Subtotal</p>
                            <p className='text-sm text-gray-600'>Discount</p>
                            <p className='text-sm text-gray-600'>Tax</p>
                        </div>
                        <div className='flex flex-col gap-1'>
                            <p className='text-sm text-gray-600'>$1403.97</p>
                            <p className='text-sm text-gray-600'>-$60.00</p>
                            <p className='text-sm text-gray-600'>+ $14.00</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-5 py-5'>
                        <div className='flex justify-between items-center'>
                            <p className='font-semibold text-black'>Total:</p>
                            <p className='font-semibold text-black'>${totalPrice}</p>
                        </div>
                        <button type="button" className="text-white border w-full  bg-blue-500 hover:bg-gray-200 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-2 py-1.5 me-2 mb-2   focus:outline-none ">Save for later</button>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Cart