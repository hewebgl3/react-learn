import * as ActionTypes from "./ActionTypes"
import AppDispatcher from "./AppDispatcher"

// 表示每次增加几
export const increment = (counter)=>{
    // 分发动作
    AppDispatcher.dispatch({
        type:ActionTypes.INCREMENT,
        counter:counter
    });
}