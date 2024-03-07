import NavbarTop from "./NavbarTop";
import NavbarLeft from "./NavbarLeft";
import NavbarRight from "./NavbarRight";
import React from "react";
import ShopItemHeader from "./ShopItemHeader";
import Shop from "./Shop";


function App(){
    return (
        <div>
            <NavbarTop/>
            <div className="dd-grid">
                <NavbarLeft/>
                <main className="flex grow items-stretch flex-col *:h-full">
                    <Shop></Shop>
                </main>
                <NavbarRight/>
            </div>
        </div>
    )
}

export default App;