import './test1.css';
import {useState} from 'react'
import useTest2 from "../hooks/test2";

function Test2() {
    const [input, setInput] = useState('');
    const {itemsDefault, items, addItem} = useTest2()

    const handleChange = (e) => {
        console.log(e.target.value);
        setInput(e.target.value);
    }

    const handleAdd = () => {
        addItem(input);
        setInput('');
    }

    return (
        <div className='test1-container'>
            <div className='test1-list'>
                List: {
                    `[${itemsDefault.join(', ')}]`
                }
            </div>
            <div className='test1-item'>
                <input value={input} onChange={handleChange}/>
                <button onClick={() => handleAdd()}>Submit</button>
            </div>

            <div>
                Add: {input}
            </div>

            <div className='test1-list'>
                List: {
                    `[${items.join(', ')}]`
                }
            </div>
        </div>
    )
}

export default Test2;
