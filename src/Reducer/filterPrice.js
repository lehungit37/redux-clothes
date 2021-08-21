import * as types from '../Constants/Action'

const initialState = 0
const myReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FILTER_PRICE_PRODUCT:
            return parseInt(action.price)
        default:
            return state
    }
}

export default myReducer