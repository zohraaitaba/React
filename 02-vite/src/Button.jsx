import { useState } from "react";

function Button({ title }) {
    //let enabled = true;
    const [enabled, setEnabled] = useState(true); //setenabled permet de changer la valeur de enabled

    return (
        <button onClick={()=> setEnabled (!enabled)}>
            {title} {enabled && '✅'}
            </button>
    );
}

export default Button;