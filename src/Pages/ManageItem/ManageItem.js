import React, { useEffect, useState } from 'react';
import ProductCart from '../ProductCart/ProductCart';
import Loading from '../Shared/Loading/Loading';
import PageTitle from '../Shared/PageTitle/PageTitle';

const ManageItem = () => {
    const [pageCount, setPageCount] = useState(0);
    const [page, setPage] = useState(0);
    const [pageSize, setPageSize] = useState(6);
    const [products, setProducts] = useState([]);
    const [allProductCount,setAllProductCount]=useState(0);
    useEffect(() => {
        fetch(`http://localhost:5000/product?page=${page}&size=${pageSize}`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [page, pageSize]);


    useEffect(() => {
        fetch('http://localhost:5000/productCount')
            .then(res => res.json())
            .then(data => {
                const productCount = data.count;
                const pages = Math.ceil(productCount / pageSize);
                setPageCount(pages);
                setAllProductCount(productCount);
            })
    }, [pageSize])

    return (
        <div>
            <PageTitle title={'Manage Item'}></PageTitle>
            <div className='bg-gray-100 py-4 md:px-2 px-2 lg:px-0'>
                <h1 className='text-center text-6xl py-2'>Our Services</h1>
                <hr className='w-36 mx-auto rounded-lg  py-1 bg-[#00a1e5]' />
                {products.length === 0 &&
                       <div className='w-full'>
                            <Loading ></Loading>
                       </div>
                        }

                <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 max-w-7xl mx-auto gap-y-12 md:gap-x-8 py-12'>
                    {

                        products.map(product => <ProductCart
                            key={product._id}
                            product={product}
                        ></ProductCart>
                        )

                    }
                </div>
                <div className="py-2">
                    <nav className="block">
                        <ul className="flex pl-0 rounded list-none flex-wrap justify-center">
                            {
                                [...Array(pageCount).keys()].map(pageNumber => <button
                                   key={pageNumber}
                                    className={`hover:scale-[1.4] transition duration-300 ease-in-out ${page === pageNumber ?
                                    "first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-pink-500 text-white bg-pink-500 cursor-pointer"
                                    :
                                    "first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-pink-500 bg-white text-pink-500 cursor-pointer" }`
                                        
                                    }
                                    onClick={() => setPage(pageNumber)}

                                > {pageNumber + 1} </button>)
                            }
                        </ul>
                        <div className="flex justify-center">
                            <div className="my-3 xl:w-96">
                                <select
                                    onChange={(e) => setPageSize(e.target.value)}
                                    className="
                                    text-center
                                    form-select appearance-none
                                    block
                                    w-full
                                    px-3
                                    py-1.5
                                    text-base
                                    font-normal
                                    text-gray-700
                                    bg-white bg-clip-padding bg-no-repeat
                                    border border-solid border-gray-300
                                    rounded
                                    transition
                                    ease-in-out
                                    m-0
                                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                                "
                                    aria-label="Default select example">
                                    <option value="6">Selected Items</option>
                                    <option value="12">12</option>
                                    <option value="24">24</option>
                                    <option value={allProductCount}>All Products</option>
                                </select>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    );

};

export default ManageItem;