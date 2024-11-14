import { useEffect, useState } from "react";
import RestaurantCards from "./RestaurantCards";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";
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
      // console.log("Fetched restaurants:", jsonData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants[0].info.id);
    setListOfRestaurant(jsonData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
    // setListOfRestaurant(jsonData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);

  };

  const onlineStatus = useOnlineStatus();
  if(onlineStatus === false ) 
    return (<h1>Looks like.. You are offline!! Please check.</h1>)
    

  return (
    listOfRestaurant.length === 0 ? "" :
      <div>
        <div className="flex items-center m-4 space-x-4">
          <div className="flex items-center space-x-4">
            <input
              type="text"
              className="border border-solid border-black p-2"
              placeholder="Search for a restaurant"
            />
            <button
              className="px-4 py-2 bg-green-400 text-white"
              onClick={() => {
                console.log("Search clicked");
              }}
            >
              Search
            </button>
          </div>
          <button
            className="px-4 py-2 bg-red-200"
            onClick={() => {
              const filteredList = listOfRestaurant.filter(
                (res) => res.data.avgRating > 4
              );
              setListOfRestaurant(filteredList);
            }}
          >
            Top Rated Restaurant
          </button>
        </div>

        <div className="flex flex-wrap">
          {listOfRestaurant.map((restaurant, key) => (
         <Link to={"/restaurant/"+restaurant.info.id} key={restaurant.info.id}>
           <RestaurantCards  resData={restaurant} />
           </Link>
          ))}
        </div>
      </div>
  );
};

export default Body;
