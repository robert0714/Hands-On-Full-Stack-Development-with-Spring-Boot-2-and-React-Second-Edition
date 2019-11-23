import React, {useState,useEffect} from 'react';
const Counter = () => {
    const [count, setCount] = useState(0);

    // Called when count value is changed
    useEffect(() => {
        console.log('Counter value is now ' + count);
    },[]);

    return (
        <div>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
};
export default Counter;