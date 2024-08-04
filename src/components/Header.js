import React from "react";

function Header({onDarkModeClick}) {
    return(
        <>
        <header>
            <button onClick={onDarkModeClick}>Mode</button>
        </header>
        </>
    )
}
export default Header