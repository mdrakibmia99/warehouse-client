import React from 'react';
import useMyItems from '../../Hooks/useMyItems';
import TableCart from './TableCart';


const TableView = () => {
    const [myItems] = useMyItems();
    return (
        <div className='container mx-auto mb-5'>
            <h1 className='text-center text-4xl my-3 font-bold'>All Users Order Product </h1>
            <hr className='w-36 mx-auto py-1 mb-8 bg-[#00a1e5] rounded' />
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Product ID
                            </th>
                            <th scope="col" className="px-6 py-3">
                                User Email
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Product Image
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Product Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Price
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Supplier
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Quantity
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myItems.map(item => <TableCart
                                key={item._id}
                                item={item}
                            ></TableCart>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default TableView;