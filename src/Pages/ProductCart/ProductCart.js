import React from 'react';
import { Link } from 'react-router-dom';

const ProductCart = ({ product, children }) => {
    const { name, img, desc, price, supplier, qty, _id } = product;

    return (
        <div className="flex justify-center transition duration-200 ease-in-out">
            <div className="rounded-lg shadow-xl bg-white max-w-sm overflow-hidden relative">
                <img className="rounded-t-lg hover:scale-[0.9] hover:rounded-xl transition duration-200 ease-in-out" src={img} alt="" />
                <div className="p-3 ">
                    <h5 className="text-black-900 
                                    text-2xl 
                                    font-medium 
                                    mb-2 
                                    tracking-tight 
                                    ">{name}</h5>
                    <p className="text-gray-400
                                     text-base 
                                     mb-2">
                        {desc}
                    </p>
                    <div className='flex 
                                    justify-between 
                                    items-center 
                                    mt-4'>
                        <p className='flex items-center'>$<span className='ml-1 text-2xl text-green-600'>{price}</span></p>
                        <p className='flex items-center bg-slate-300 px-2 rounded-2xl'>Quantity: <span className='ml-1 text-2xl text-indigo-600'>{qty}</span></p>
                    </div>
                    <div className='mb-10 
                                    flex
                                    items-stretch
                                    justify-between
                                    '>
                        <p className="flex
                                    text-xl 
                                    tracking-tight 
                                    text-gray-900 
                                    items-center
                                    "><span className='text-sm mr-1'>Supplier: </span>{supplier}</p>

                        {children}
                    </div>

                    <div className='absolute bottom-0 w-full left-0 text-center'>
                        <div className='text-center '>
                            <Link 
                            to={`/inventory/${_id}`}
                            className="inline-flex 
                                        text-decoration-none  
                                        items-center 
                                        justify-center 
                                        w-full  
                                        py-2.5 
                                        mt-2  
                                        px-3 
                                        text-1xl  
                                        font-medium 
                                        text-center 
                                        text-white 
                                        bg-blue-700 
                                        rounded-b-lg 
                                        hover:bg-blue-800">

                                Manage Stock
                                <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCart;