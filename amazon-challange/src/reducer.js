export const initialState = {
    basket:[{
        id:"3254354345",
                    title:"Apple iPad Pro(12.9-inch,Wi-Fi,128GB)-Space Gray(4th Generation)",
                    price:975,
                    rating:5,
                    image:"https://www.amazon.com/images/I/81SGb5l%2BlZL._AC_SL1500_.jpg"
                
    },
    {
        id:"3254354345",
                    title:"Apple iPad Pro(12.9-inch,Wi-Fi,128GB)-Space Gray(4th Generation)",
                    price:975,
                    rating:5,
                    image:"https://www.amazon.com/images/I/81SGb5l%2BlZL._AC_SL1500_.jpg"
                
    },
],
    user:null,
};

export const getBasketTotal = (basket)=>
basket?.reduce((amount,item)=>item.price+amount,0);

const reducer =(state,action)=>{
    console.log(action);
    switch(action.type){
        case "ADD_TO_BASKET":
            return {
                ...state,  /* */
                basket: [...state.basket,action.item]
            };
            break;
        
        case "REMOVE_FROM_BASKET":
            let newBasket = [...state.basket];

            const index = state.basket.findIndex(
            (basketItem) => basketItem.id===action.id
            );
            
            if(index >=0){
                //item exists in basket, remove it....
                newBasket.splice(index,1);

            }else{
                console.warn("Cant remove");
            }

            return{
                    ...state,
                    basket: newBasket,
                };
        default:
            return state;
    }
};

export default reducer;


