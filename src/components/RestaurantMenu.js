import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../../utils/useRestaurantMenu";

const RestaurantMenu = ()=>{
    const {resId} = useParams();
    const resInfo = useRestaurantMenu(resId);   return(
            <div>
                <div className="flex flex-col items-center mt-4">
                <div className="text-[19px] pt-4">{resInfo?.cards[2]?.card?.card?.info.name}</div>
                <h3 className="pt-2">{resInfo?.cards[2]?.card?.card?.info.cuisines?.join(", ")} - {resInfo?.cards[2]?.card?.card?.info.costForTwoMessage}</h3>
                <h3 className="pt-2">{resInfo?.cards[2]?.card?.card?.info.avgRating} </h3>
                <h2 className="pt-2">{resInfo?.cards[2]?.card?.card?.info.city}</h2>
                <div className="text-red-600">{resInfo?.cards[4]?.groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards[0].card.info.name}</div>
                </div>
                </div>
        )
}
export default  RestaurantMenu;