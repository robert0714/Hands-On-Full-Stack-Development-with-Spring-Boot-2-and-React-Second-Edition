import React, {useState} from 'react';
const Counter = () => {
    const [firstName, setFirstName] = useState('John');
    const [lastName, setLastName] = useState('Johnson');
    return (
        <div>
            <p>{firstName}</p>
            <p>{lastName}</p>
            <button onClick={
                // Update state values
                () => setFirstName('Jim')   ,() => setLastName('Palmer')
                }>  Increment 
            </button>
        </div>
    );
};
export default Counter;