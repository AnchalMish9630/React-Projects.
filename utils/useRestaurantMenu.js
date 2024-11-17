import { useEffect, useState  } from "react";
const useRestaurantMenu = (resId)=>{

    const [resInfo, setResInfo] = useState(null); 
    useEffect(()=>{
        getURL();
    }, []);
    
    const getURL = async ()=>{
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9584922&lng=77.7126588&restaurantId="+
        resId+"&catalog_qa=undefined&submitAction=ENTER");
        const jsonData = await data.json();
        console.log("hello data comming..", jsonData);
        setResInfo(jsonData.data);
    };
    return resInfo;
}
export default useRestaurantMenu;