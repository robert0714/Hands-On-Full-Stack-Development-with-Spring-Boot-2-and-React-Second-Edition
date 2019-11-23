import React, {useState} from 'react';
const Counter = () => {
    const [name, setName] = useState({firstName: 'John', lastName: 'Johnson'});
    
    return (
        <div>
            <p>{name}</p>
           
            <button onClick={           
                 setName({firstName: 'Jim', lastName: 'Palmer'})
               
                }>  Increment 
            </button>
        </div>
    );
};
export default Counter;