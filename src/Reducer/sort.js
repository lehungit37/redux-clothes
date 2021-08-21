import * as types from '../Constants/Action'

const initialState = {
    by: "default",
    value: 1
}

const myReducer = (state = initialState, action)=>{
    switch (action.type) {
        case types.SORT_PRODUCT:
            return action.sort
        default:
            return state
    }
}
export default myReducer
