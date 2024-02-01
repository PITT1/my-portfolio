import React, { useState } from "react";

const Contador = () => {
    const [count, setCount] = useState(0);

    const incrementar = () => {
        setCount( count + 1 );
        console.log("esta incrementandose");
    }
    return(
        <div>
            <h1>Contador de clics</h1>
            <div>{count}</div>
            <button onClick={incrementar}>Incrementar</button>
        </div>
    )
}

export default Contador;