import NavbarTop from "./NavbarTop";
import NavbarLeft from "./NavbarLeft";
import NavbarRight from "./NavbarRight";
import React from "react";
import Shop from "./Shop";
import {Outlet} from "react-router-dom";


let topItems = [{name: "arm", link: "/arm"}, {name: "cyberimplants", link: "/cyberimplants"}, {name: "hydra", link: "/hydra"}];
let item = topItems[0];
function App(){
    return (
        <div>
            <NavbarTop/>
            <div className="dd-grid">
                <NavbarLeft/>
                <main className="flex grow items-stretch flex-col *:h-full">
                    <Outlet item={item} className="arm"></Outlet>
                </main>
                <NavbarRight topItems={topItems}/>
            </div>
        </div>
    )
}

export default App;