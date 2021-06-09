import { StarIcon } from "@heroicons/react/outline";
import Image from "next/image";
import Currency from "react-currency-formatter";

function CheckoutProduct({ 
    id, 
    title, 
    rating,
    price, 
    description, 
    category, 
    image,
    hasPrime
 }) {
    return (
        <div className='grid grid-cols-5 '>
            <Image src={image}
            width={200}
            height={200}
            objectFit='contain'
            />

            {/* Middle */}
            <div className='col-span-3 mx-5'>
                <p>{ title }</p>
                <div className='flex'>
                    {Array(rating)
                    .fill()
                    .map( (_,i) => (
                        <StarIcon keys={i} className='h-5 text-yellow-500' />
                    ))}
                </div>

                <div className='text-xs my-2 line-clamp-3'>{ description }</div>
                <Currency quantity={price} currency='GBP' />

                

            </div>
            
        </div>
    )
}

export default CheckoutProduct
