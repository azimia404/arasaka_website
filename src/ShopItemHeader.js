import {Link} from "react-router-dom";
import Image from "./Media/Resources/shop/item1.png"
import "./Shop.css"

function ShopItemHeader(props){
    return(
        <div className="Shop-Item-Landing">
            <div className="Shop-space"></div>
            <header className="Shop-Item-Banner">
                <h2 className="font-anta font-bold text-white uppercase text-5xl z-10 Shop-shadow"> {props.name}</h2>
                <span className="font-anta text-gray-500 text-4xl text-thin z-10 Shop-shadow">{props.label}</span>
                <Link className="Shop-Learn-more">Learn More</Link>
            </header>
            <img className="Shop-Item-Image" src={Image}/>
        </div>
    )
}

export default ShopItemHeader;