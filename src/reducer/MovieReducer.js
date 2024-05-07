export const initialValue = { cartData: [] };

export function MovieReducer(state, action) {
  if (action.type === "Add_to_cart") {
    return { cartData: [...state.cartData, action.payload] };
  } else if (action.type === "Removed_From_Cart") {
    const newmovie = state.cartData.filter(
      (item) => item.id !== action.payload.id
    );
    return {
      ...state,
      cartData: newmovie,
    };
  }
  else if(action.type === "checkout"){
    console.log("Checkout");
    return {
      ...state,
      cartData:[]
    };
  }
}
