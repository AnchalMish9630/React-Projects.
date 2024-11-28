import { useSelector } from "react-redux";
import ItemList from "./ItemList";

const Cart = ()=>{

    const cartInfo = useSelector((store)=>(store.cart.itemCart));
    console.log("My cart ", cartInfo);

    return(
        <div className="text-center m-4 p-4">
            <div className="text-2xl font-bold">
                Cart
                </div>
                <div>
                <ItemList itemData={cartInfo} />
                </div>
              
                    {/* {cartInfo.map((item, key)=>{
                         <h1>
                         {item.card.info.name}
                        </h1>
                    }
                    )} */}
                   
           
        </div>
    )
};

export default Cart;
