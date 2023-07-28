import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import ProductCart from '../ProductCart/ProductCart';
import PageTitle from '../Shared/PageTitle/PageTitle';

const MyItems = () => {
    const [orders,setOrders]=useState([]);
    const [user]=useAuthState(auth);

    useEffect(() => {
        const getOrders = async () => {
            const url = `http://localhost:5000/order?email=${user?.email}`;
            const { data } = await axios.get(url);
            setOrders(data);
        
        };
        getOrders();
    }, [user,orders]);


    const handleDeleteItem = (id) => {

        const yes = window.confirm('Want to delete this item?');
        if (yes) {
            axios.delete(`http://localhost:5000/myItems/${id}`)
                    .then(res => {
                toast('item deleted!');
            })
        }

    }
    return (
        <div>
            <PageTitle title={'My Items'}></PageTitle>
            <section className=' py-5 bg-gray-100 '>
                <h1 className='text-center text-6xl py-2'>My Items</h1>
                <hr className='w-36 mx-auto rounded-lg  py-1 bg-[#00a1e5]' />
                <div className='grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 mt-5 container gap-5'>
                    {orders.map(product => <ProductCart
                        key={product._id}
                        product={product}
                    >
                        <button
                            className='flex bg-red-500 items-center px-2 rounded-lg text-white hover:bg-red-700'
                            onClick={()=>handleDeleteItem(product._id)}
                        > Delete
                            <div >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                </svg>
                            </div>
                        </button>

                    </ProductCart>
                    )}
                </div>
            </section>
        </div>
    );
};

export default MyItems;