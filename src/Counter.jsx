import { useState } from "react";


const Counter = () => {
    const [count, setCount] = useState(0);

    const handleAdd = () =>{
        const newCount = count + 1;
        setCount(newCount)
    }

    const handleReduce = () =>{
        const newCount = count - 1;
        if(newCount == -1){
            return;
        }
        setCount(newCount)
    }
    return (
        <div className="add-reduce">
            <h3>Counter: {count}</h3>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleReduce}>Reduce</button>
        </div>
    );
};

export default Counter;