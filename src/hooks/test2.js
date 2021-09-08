import {useState} from 'react';

function useTest2() {
    const itemsDefault = ['A', 'B', 'C', 'D'];
    const [items, setItems] = useState(itemsDefault);

    const addItem = (item) => {
        setItems([...items, item]);
    }

    return {itemsDefault, items, addItem};
}

export default useTest2;
