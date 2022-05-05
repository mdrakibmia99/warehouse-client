import axios from "axios";
import { useEffect, useState } from "react";

const useProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('https://desolate-ridge-35981.herokuapp.com/product')
            .then(res => setProducts(res?.data))
    }, []);

    return [products];
};

export default useProducts;