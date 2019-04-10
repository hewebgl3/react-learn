import {createStore,applyMiddleware} from 'redux'

import reducer from "./Reducer"
import {increment} from "./Actions"
import logger from 'redux-logger'

// 自己写的一个中间件
// const logger = ({ dispatch, getState }) => next => action => {
//     // 
//     console.log("action ",action.type," @ ",
//         new Date().toLocaleString())
    
//     console.log("prev state:",getState())
//     next(action);
//     console.log(action)
//     console.log("next state:",getState())
// };
  
  


export default createStore(reducer,applyMiddleware(logger))

