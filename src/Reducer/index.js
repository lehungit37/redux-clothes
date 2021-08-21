import {combineReducers} from 'redux'
import product from './product'
import cart from './cart'
import displayMiniCartForm from './displayMiniCartForm'
import filterPrice from './filterPrice'
import sort from './sort'

const myReducer = combineReducers({
    product,
    cart,
    displayMiniCartForm,
    filterPrice,
    sort
})

export default myReducer    