import { CDN_URL } from "../../utils/constant";
const ItemList = ({itemData})=>{

    return(
        <div>
           {
                itemData?.map((item)=>{
                    return(
                        <div key={item.card.info.id} 
                        className="p-3 m-3 border-gray-200 border-b text-left flex justify-between"
                        >
                        <div className="w-9/12">
                        <div className="py-2">
                        <span className="font-bold text-lg">{item?.card?.info?.name} : </span> 
                        <span className="font-bold text-lg pl-1">₹ {item?.card?.info?.price && item?.card?.info?.price/100 || item?.card?.info?.defaultPrice}</span> 
                        </div>
                        <p className="text-lg">{item?.card.info.description}</p>
                        </div>
                        <div className="w-3/12 p-4">
                        <button className="p-1 items-center bg-gray-900 shadow-lg rounded-lg absolute m-auto text-white">Add +</button>
                     
                            <img src={CDN_URL+ item.card.info.imageId} className="w-full"/>
                                  </div>
                       
                        </div>
                    );
                 
                })
            }
         
            {/* {itemData[0]?.card?.info?.name}
            {itemData[1]?.card?.info?.name}
            {itemData[2]?.card?.info?.name} */}
        </div>
    )

}
export default ItemList;