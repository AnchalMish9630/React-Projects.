import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory"

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  const restaurantData = resInfo?.cards?.[2]?.card?.card?.info; 
  const restaurantName = restaurantData?.name;
  const restaurantCuisines = restaurantData?.cuisines?.join(", ");
  const restaurantCost = restaurantData?.costForTwoMessage;
  const restaurantAvgRating = restaurantData?.avgRating;
  const restaurantCity = restaurantData?.city;


  const itemCards = resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card?.card?.itemCards || [];
//   console.log(itemCards);

//   useEffect(() => {
//     // Log resInfo to verify structure
//     console.log(resInfo);
//     if (resInfo && resInfo.cards && resInfo.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card?.card?.itemCards) {
//       console.log(resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards[0].card.info.name);
//     } else {
//       console.log("Data structure is not available yet or incomplete");
//     } 
//   }, [resInfo]);
const category = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
        (c)=> c?.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

console.log("he.loo",category );
return (
    <div>
      <div className="text-center">
        {/* Restaurant Information */}
        <div className="">
                <h1 className="font-bold my-4 text-3xl">{restaurantName}</h1>
                </div>
        <h3 className="pt-2 font-bold my-2 text-2xl">{restaurantCuisines} - {restaurantCost}</h3>
        <h3 className="pt-2 font-normal my-2 text-xl">{restaurantAvgRating}</h3>

   {/* <h2>Menu</h2>
        <ul>
         Render items only if itemCards is populated
          {itemCards.length > 0 ? ( 
            itemCards.map((item, key) => (
              <li key={key}>{item.card?.info?.name}</li>
            ))

  ) : ( 
            <li>No items available</li> // Fallback message if no items
           )}  

       
        </ul>  */}

        {
                category?.map((item,key)=>
                        <RestaurantCategory data={item?.card?.card} />
                )
        }

      </div>
    </div>
  );
};

export default RestaurantMenu;
