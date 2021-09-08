import './test1.css';
import useTest1 from '../hooks/test1'

function Test1() {
    const [items, displayItem, nextItem, prevItem] = useTest1();

    const handlePrev = () => {
        prevItem(displayItem);
    }

    const handleNext = () => {
        nextItem(displayItem);
    }

    return (
        <div className='test1-container'>
            <div className='test1-list'>
                List: {
                    `[${items.join(', ')}]`
                }
            </div>
            <div className='test1-item'>
                Key: {displayItem+1}
            </div>
            <div className='test1-name'>
                Name: {items[displayItem]}
            </div>
            <div className='test1-navigation'>
                <button className='test1-navigation__prev' onClick={() => handlePrev()}>Prev</button>
                <button className='test1-navigation__next' onClick={() => handleNext()}>Next</button>
            </div>
        </div>
    )
}

export default Test1;
