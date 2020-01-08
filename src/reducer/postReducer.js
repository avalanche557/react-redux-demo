import { FETCH_POST, NEW_POST } from "../actions/types";

const initialState = {
  items: [],
  item: {}
};

export default function(state = initialState, actions) {
  switch (actions.type) {
    case FETCH_POST:
      console.log("reducer");
      return {
        ...state,
        items: actions.payload
      };
      break;
    case NEW_POST:
      console.log("post");
      return {
        ...state,
        item: actions.payload
      };
      break;
    default:
      return state;
  }
}
