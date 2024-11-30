import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../../utils/store/cartSlice";

const Cart = ()=>{

    const cartInfo = useSelector((store)=>(store.cart.itemCart));
    console.log("My cart ", cartInfo);

    const dispatch = useDispatch();
    const handlerClearCart = ()=>{
        dispatch(clearCart(cartInfo));
    }


    return(
        <div className="text-center m-4 p-4">
            <div className="text-2xl font-bold">
                Cart
                </div>
                <div className="w-6/12 m-auto">
                
                    <button 
                        className="ml-[650px] bg-purple-300 text-black p-2 m-2 rounded-lg"
                        onClick={()=>{handlerClearCart(cartInfo)}}>Clear cart</button>
                
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
