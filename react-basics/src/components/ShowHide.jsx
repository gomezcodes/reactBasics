import { useState } from "react"


function ShowHide() {
    const[show, setShow] = useState(true)

    const handleClick = (e) => {
        setShow(!show)
    }

    return <div>
        <button onClick={handleClick}>{show ? "Hide " : "Show "}Text</button>
        {show && <h2>Hide Me!</h2>}
    </div>
}

export default ShowHide