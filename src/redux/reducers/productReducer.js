import { ActionType } from "../contants/action-type"

const initialState = {
  Products: [
    {
      id: 1,
      title: "Dipesh",
      category: "programmer"
    }
  ]
};
export const productReducer = (state, {type, payload}) => {
  switch (type) {
    case ActionType.SET_PRODUCTS:
      return state;
    default:
      return state;
  }
}