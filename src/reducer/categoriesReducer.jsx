const categoriesReducer = (state, action) => {
    switch (action.type) {
        case "SET_CATEGORIES_API_DATA":{
           // console.log("SET_CATEGORIES_API_DATA",action.payload)
           return {
              ...state,
            
              categories: action.payload,
             
             
            };
          

        }
            case "SET_SUB_CATEGORIES_API_DATA":

            return{
                ...state,
                sub_categories: action.payload
            }

            case "SET_SUB_SUB_CATEGORIES_API_DATA":

            return{
                ...state,
                sub_sub_categories: action.payload
            }

     default:
                return state;
    }
 

};
export default categoriesReducer;