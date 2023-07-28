import axios from "axios";
import { useEffect, useState } from "react";

const useMyItems = () => {
    const [myItems, setMyItems] = useState([]);

    useEffect(() => {
        axios.get('https://warehouse-server-five.vercel.app/myProduct')
            .then(res => setMyItems(res?.data))
    }, []);

    return [myItems, setMyItems];
}

export default useMyItems;