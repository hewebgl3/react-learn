
import { INCREMENT ,DECREMENT} from "./ActionTypes";

export default (state=0,action) =>{
    switch (action.type) {
        case INCREMENT:
            return state + action.counter;
        case DECREMENT:
            return state - action.counter
        default:
            return state;
    }
}