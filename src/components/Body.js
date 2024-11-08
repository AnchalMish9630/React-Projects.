import { useEffect, useState } from "react";
import RestaurantCards from "./RestaurantCards";

const Body=()=>{

    const [listOfRestaurant,setListOfRestaurant ]=useState([])

    useEffect(() => {
        fetchData();
    }, [])
    const fetchData = async()=>{
        const data = await  fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65200&lng=77.16630&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const jsonData = await data.json();
        setListOfRestaurant(jsonData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
        console.log("helllo",jsonData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
    }
    return(
        <div>
            {listOfRestaurant.map((restaurant, key)=>{
                return <RestaurantCards resData={restaurant} />
            } )}
            
            <button onClick={fetchData}>upload dknjwkjsn</button>
        </div>
    )
}
export default Body;