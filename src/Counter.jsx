
import React, { useState } from 'react';

export default function Counter() {
    const [count, setCount] = useState(0);
    
    return (
        <div>
            <h2>You clicked this many times {count}</h2>
            <button onClick={() => {
                console.log('you clicked me')
                setCount(count + 1)
            }}>Click Here</button>

        </div>
    )
}