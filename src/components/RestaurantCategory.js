import { useState } from "react"
import ItemList from "./ItemList"
const RestaurantCategory = ({data, showItems, getIndex})=>{
    // const [showItems, setShowItems] = useState(false);

    const handlClick = ()=>{
        getIndex();
    }
    return(
        <div>
            {/* header */}
        {/* <div className="w-6/12 mx-auto my-4 bg-gray-100 shadow-md p-3"> */}
        <div className="w-6/12 mx-auto my-4 bg-gray-100 shadow-md p-3 ">
           <div className="flex justify-between cursor-pointer" 
           onClick={handlClick}
           >
           <span className="font-bold text-lg">{data.title}({data.itemCards.length})</span>
            <span>⬇️</span>
           </div>

        {/* Body */}
        {/* onclick of header body i.e. show or hide list  */}
        {showItems &&   <ItemList itemData = {data.itemCards} />}
    </div>
     
        </div>
    )

}
export default RestaurantCategory;