import './test1.css';
import {useState} from 'react'
import useList from "../hooks/test2";

function FinalTest() {
    const [input, setInput] = useState('');
    const {itemsDefault, displayItem, searchItem} = useList()

    const handleChange = (e) => {
        console.log(e.target.value);
        setInput(e.target.value);
    }

    const handleAdd = () => {
        searchItem(input);
    }

    return (
        <div className='test1-container'>
            <div className='test1-list'>
                学生一覧：{
                    `[${itemsDefault.join(', ')}]`
                }
            </div>
            <div className='test1-item'>
                検索名前：
                <input value={input} onChange={handleChange}/>
                <button onClick={() => handleAdd()}>Submit</button>
            </div>
            <hr />
            <div>
                検索名前: {input}
            </div>

            <div className='test1-list'>
                位置：{displayItem　=== 0 ? 'NaN' : displayItem}
            </div>
        </div>
    )
}

export default FinalTest;
