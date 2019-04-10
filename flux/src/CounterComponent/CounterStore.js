// store

import {EventEmitter} from "events"
import AppDispatcher from "./AppDispatcher"
import * as ActionTypes from "./ActionTypes"

const CHANGE_EVENT = "changed"
const counterValues ={
    "counter" :0
}
const CounterStore = Object.assign({},EventEmitter.prototype,{
    // 获取值一个函数
    getCounterValues:function(){
        return counterValues
    }
    ,
    emitChange:function(){
        this.emit(CHANGE_EVENT)
    },
    // 添加监听器
    addChangeListener:function(callback){
        this.on(CHANGE_EVENT,callback)
    }
    ,
    // 移除监听器
    removeChangeListener:function(callback){
        this.removeChangeListener(CHANGE_EVENT,callback)
    }
})

AppDispatcher.register((action)=>{
    if(action.type === ActionTypes.INCREMENT){
        counterValues["counter"] = counterValues["counter"] + action.counter
        CounterStore.emitChange();
    }
});

export default CounterStore
