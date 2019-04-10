import * as actions from "../../CounterComponent/Actions.js"
import * as ActionTypes from "../../CounterComponent/ActionTypes"

describe("test actions",()=>{
    it("increment",()=>{
        const action = actions.increment(1)
        expect(action.type).toBe(ActionTypes.INCREMENT)
        expect(action.counter).toBe(1)
    })
})