import {useState} from 'react';

function useTest1() {
    const items = ['A', 'B', 'C', 'D'];
    const [displayItem, setDisplayItem] = useState(0)

    const nextItem = (currentItem) => {
        if (currentItem >= items.length-1) {
            currentItem = -1
        }

        setDisplayItem(currentItem+1)
    }

    const prevItem = (currentItem) => {
        if (currentItem <= 0) {
            currentItem = items.length
        }

        setDisplayItem(currentItem-1)
    }

    return [items, displayItem, nextItem, prevItem];
}

export default useTest1;
