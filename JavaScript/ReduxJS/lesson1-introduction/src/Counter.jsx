import React from 'react'
import { createStore } from 'redux'

const initialState = { count: 0 }

const store = createStore((state = initialState, action) => {
    switch (action.type) {
        case "INCREMENT":
            return { count: state.count + (typeof action.payload === "number" ? action.payload : 1) }
        case "DECREMENT":
            return { count: state.count - 1 }
        default:
            return state;

    }
});


store.subscribe(() => {
    console.log(store.getState());

})


store.dispatch({
    type: "INCREMENT",
    payload: "10"
})
store.dispatch({
    type: "INCREMENT",
    payload: 10
})

store.dispatch({
    type: "INCREMENT",
    payload: 5

})
store.dispatch({
    type: "DECREMENT",
    access:true
})

store.dispatch({
    type: "DECREMENT",
    access:false
})





const Counter = () => {
    return (
        <div>Counter</div>
    )
}

export default Counter