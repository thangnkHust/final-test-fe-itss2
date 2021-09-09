import {useState} from 'react';

function useTest2() {
    const itemsDefault = ['Huyen', 'Hoa', 'Hung', 'Long'];
    const [displayItem, setDisplayItem] = useState(null);

    const searchItem = (item) => {
        const index = itemsDefault.findIndex(i => i === item)
        setDisplayItem(index + 1);
    }

    return {itemsDefault, searchItem, displayItem};
}

export default useTest2;
