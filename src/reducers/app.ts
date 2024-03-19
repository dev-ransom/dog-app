import { Action, ActionType, ReducerState,  } from "../types/reducer";


const initState:ReducerState = {
  breed: "all",
  subBreed: "all",
  number: "1",
  imageResults: 0,
  error: false,
};

const app = (state = initState, action: Action): ReducerState =>{
    switch (action.type) {
        case ActionType.BREED: 
            return Object.assign({}, state, {
                breed: action.payload
            })
        default: return state;
    }
};

export default app;