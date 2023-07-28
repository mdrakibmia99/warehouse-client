import axios from "axios";
import { useEffect, useState } from "react";

const useMyItems = () => {
    const [myItems, setMyItems] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/myProduct')
            .then(res => setMyItems(res?.data))
    }, []);

    return [myItems, setMyItems];
}

export default useMyItems;