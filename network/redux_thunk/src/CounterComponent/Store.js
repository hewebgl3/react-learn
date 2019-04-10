import {createStore,applyMiddleware} from 'redux'

import reducer from "./Reducer"
import {increment} from "./Actions"
import logger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'


export default createStore(reducer,
    applyMiddleware(thunkMiddleware,logger))

