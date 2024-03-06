import NavbarTop from "./NavbarTop";
import NavbarLeft from "./NavbarLeft";
import NavbarRight from "./NavbarRight";
import React from "react";

function App(){
    return (
        <div>
            <NavbarTop/>
            <div className="dd-grid">
                <NavbarLeft/>
                <main className="dd-grow-1"></main>
                <NavbarRight/>
            </div>
        </div>
    )
}

export default App;