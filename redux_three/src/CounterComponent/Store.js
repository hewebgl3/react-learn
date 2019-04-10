import {createStore} from 'redux'

import reducer from "./Reducer"
import {increment} from "./Actions"

// export default createStore(reducer)

export default createStore(reducer)

// console.log(store.getState())

// const unsubscribe = store.subscribe(() =>{
//     console.log(store.getState())
// })

// store.dispatch(increment(1))
// store.dispatch(increment(1))
// store.dispatch(increment(1))

// unsubscribe()

// export default store
