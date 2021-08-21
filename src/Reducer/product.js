import data from '../Database/SANPHAM.json'
import * as types from '../Constants/Action'
var initialState = data ? data : []
var myReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.ALL_PRODUCT:
            return state
        
        default:
            return state
    }
}

export default myReducer