import React from 'react';

const TableCart = (props) => {
    const { _id, name, img, price, qty, email, supplier } = props.item;
    return (
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th scope="row" className="px-6 py-4 font-medium text-gray-400  whitespace-nowrap">
                {_id}
            </th>
            <td className="px-6 py-4">
                {email}
            </td>
            <td className="px-6 py-4">
                <img src={img}  alt="product-icon" className='w-8 rounded hover:scale-[3] transition duration-300 ease-in-out' />
            </td>
            <td className="px-6 py-4">
                {name}
            </td>
            <td className="px-6 py-4 font-bold">
                ${price}
            </td>
            <td className="px-6 py-4">
                {supplier}
            </td>
            <td className="px-6 py-4">
                {qty}
            </td>
        </tr>
    );
};

export default TableCart;