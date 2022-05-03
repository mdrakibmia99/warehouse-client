import React from 'react';
import { Link } from 'react-router-dom';

const AddItem = () => {
    return (
      <div className="max-w-sm bg-gray rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        
      <img className="rounded-t-lg" src={'https://i.ibb.co/F4jY93S/img-9.jpg'} alt="product-img" />
      <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Shari</h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Bypass Pancreatic Duct to Large Intestine, Percutaneous Endoscopic Approach</p>
          <hr className='my-4' />
          <div className='flex justify-between items-center my-4'>
              <p className='flex items-center'>$<span className='ml-1 text-2xl text-green-600'>450.50</span></p>
              <p className='flex items-center bg-slate-300 px-2 rounded-3xl'>QTY: <span className='ml-1 text-2xl text-indigo-600'>20</span></p>
          </div>
          <h5 className="mb-2 text-xl tracking-tight text-gray-900 dark:text-white flex items-center"><span className='text-sm mr-1'>Supplier: </span>Rk</h5>
          <Link to="/" className="inline-flex items-center py-2 mt-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Manage Stock
              <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
          </Link>
      </div>
  </div>
    );
};

export default AddItem;