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

export const onCrementDelay = (second)=>{
    return (dispatch,state) =>{
        // setTimeout 大家可以自行补充

        // 从服务器获取数据 
        fetch("/data/sk/101110101.html").then(
                response => {
                    console.log(response)
                    return response.json()
                }
            ).then(result=>{
            dispatch(increment(Number(result.weatherinfo.temp)))
        })
        
    }
}

