const productReducer = (state, action) => {
  switch (action.type) {
    case "SET_API_DATA": {
      const newArrivalData = action.payload.filter((curElem) => {
        return curElem.newArrival === true;
      });
      const livingChairsData = action.payload.filter((curElem) => {
        return curElem.subcat_id === 101 && curElem.cat_id === 1;
      });
      const sofaData = action.payload.filter((curElem) => {
        return curElem.subcat_id === 102 && curElem.cat_id === 1;
      });
      const storageData = action.payload.filter((curElem) => {
        return curElem.subcat_id === 103 && curElem.cat_id === 1;
      });
      const diningTableData = action.payload.filter((curElem) => {
        return curElem.subcat_id === 101 && curElem.cat_id === 2;
      });
      const diningSetsData = action.payload.filter((curElem) => {
        return curElem.subcat_id === 102 && curElem.cat_id === 2;
      });
      const diningChairsData = action.payload.filter((curElem) => {
        return curElem.subcat_id === 103 && curElem.cat_id === 2;
      });

      return {
        ...state,

        products1: action.payload,
        newArrivalProducts: newArrivalData,
        livingchairs: livingChairsData,
        sofaProduct: sofaData,
        storageProduct: storageData,
        dinningTablesProduct: diningTableData,
        dinningSetsProduct: diningSetsData,
        dinningChairsProduct: diningChairsData,
      };
    }
    default:
      return state;
  }
};
export default productReducer;
