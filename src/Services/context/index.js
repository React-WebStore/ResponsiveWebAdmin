import React, { createContext, useReducer } from "react";
import { uuidv4 } from "../../Utils";
const initialState = { items: [], cart: [], preview: {} };
export const contextState = createContext(initialState);
const { Provider } = contextState;
export const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "previewItem":
        return Object.assign({}, state, {
          preview: action.payload,
        });
      case "initializeInventory":
        const inventory = action.payload.map((item) => ({
          ...item,
          uuid: uuidv4(),
        }));
        return Object.assign({}, state, {
          inventory,
        });
      case "removeItemFromInventory":
        return Object.assign({}, state, {
          inventory: state.inventory.filter(
            (item) => item.uuid !== action.payload
          ),
        });
      default:
        throw new Error();
    }
  }, initialState);

  return <Provider value={{ ...state, dispatch }}>{children}</Provider>;
};
