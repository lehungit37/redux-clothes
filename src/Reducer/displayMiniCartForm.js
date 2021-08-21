import * as types from '../Constants/Action'

const initialState = false
const myReducer= (state = initialState, action) => {
    switch (action.type) {
        case types.CLOSE_MINI_CART:
            return false
        case types.OPEN_MINI_CART:
            return true
        default:
            return state
    }
}
export default myReducer