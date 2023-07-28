import axios from "axios";
import { useEffect, useState } from "react";

const useProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('https://warehouse-server-five.vercel.app/product')
            .then(res => setProducts(res?.data))
    }, []);

    return [products];
};

export default useProducts;