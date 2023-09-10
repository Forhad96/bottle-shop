import { useState } from "react";
import Bottle from "./Bottle";
import './Bottles.css'


const Bottles = () => {
    const [bottles,setBottles] = useState([])
    useState(() =>{
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/memorable-water-bottle/main/public/bottles.json')
        .then(res => res.json())
        .then(data => setBottles(data))
        
    },[])
    
    // buy now handler
    const handlerBuyNow = () =>{
        console.log('clicked');
    }
    return (
        <div>
            <h3>Bottles here:{bottles.length}</h3>
            <div className="bottles">
            {
                bottles.map(bottle => <Bottle 
                key={bottle.id}
                handlerBuyNow={handlerBuyNow}
                bottle={bottle}>
                </Bottle>)
            }
            </div>
        </div>
    );
};

export default Bottles;