import { useState } from "react";

const ToggleMessage = () => {
    const [show, setShow] = useState(false);
    return (
        <div>
            <button onClick={() => setShow(!show)}>
                {show ? "hide" : "show"} message
            </button>
            {show && <p> hello </p>}
        </div>
    )
}

export default ToggleMessage