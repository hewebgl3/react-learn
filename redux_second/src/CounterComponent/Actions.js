import * as ActionTypes from "./ActionTypes"


// 表示每次增加几
export const increment = (counter)=>(
    {
        type:ActionTypes.INCREMENT,
        counter:counter
    }
)


