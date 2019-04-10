import * as ActionTypes from "./ActionTypes"


// 表示每次增加几
export const increment = (counter)=>(
    {
        type:ActionTypes.INCREMENT,
        counter:counter
    }
)

// 参数是每次减少的个数
export const decrement = (counter)=>(
    {
        type:ActionTypes.DECREMENT,
        counter:counter // 搭载的数据
    }
)


