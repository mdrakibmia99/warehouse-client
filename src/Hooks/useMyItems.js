import axios from "axios";
import { useEffect, useState } from "react";

const useMyItems = () => {
    const [myItems, setMyItems] = useState([]);

    useEffect(() => {
        axios.get('https://desolate-ridge-35981.herokuapp.com/myProduct')
            .then(res => setMyItems(res?.data))
    }, []);

    return [myItems, setMyItems];
}

export default useMyItems;