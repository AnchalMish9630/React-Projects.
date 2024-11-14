import { CDN_URL } from "../../utils/constant";
const RestaurantCards = ({ resData }) => {
    // console.log(resData.info);
    const { name, avgRating, cuisines, costForTwo, locality } = resData;

    return (
        <div className="m-4 p-4 w-[300px] h-[500px] border border-gray-300 bg-gray-100 hover:bg-gray-200 cursor-pointer rounded-lg shadow-lg transition-all">
            <img 
                className="w-full h-[200px] object-cover rounded-t-lg"
                src={CDN_URL + `${resData.info.cloudinaryImageId}`} 
                alt={resData.info.name}
            />
            <h1 className="font-bold text-xl mt-2">{resData.info.name}</h1>
            <h2 className="text-gray-700">Rating: {resData.info.avgRating}</h2>
            <h3 className="text-gray-600">Cuisines: {resData.info.cuisines}</h3>
            <h3 className="text-gray-600">Cost for Two: ₹{resData.info.costForTwo}</h3>
            <h4 className="text-gray-500">{resData.info.locality}</h4>
        </div>
    );
}

export default RestaurantCards;