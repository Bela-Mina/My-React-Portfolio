import { useState } from "react";

// function counter() {
//     const [count, setCount] = useState(0);

//     return (

//         <div>
//             <h1>{count}</h1>

//             <button onclick = {() => setCount(count + 1)}>
//                 Increase
//             </button>
//         </div>
//     )

// }
// export default counter;



// Increase 
count
function increase() {
    const [count, countIncrease] = useState(1);
    return (
        <div>
            <h2>{count}</h2>

            <button onClick={() => countIncrease(count++)}></button>
        </div>
        
    )
}
export default increase