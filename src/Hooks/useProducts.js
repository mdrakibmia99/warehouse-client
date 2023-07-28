import axios from "axios";
import { useEffect, useState } from "react";

const useProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/product')
            .then(res => setProducts(res?.data))
    }, []);

    return [products];
};

export default useProducts;