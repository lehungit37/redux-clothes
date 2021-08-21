import * as types from '../Constants/Action'
import { v4 as uuidv4 } from 'uuid'

var data = JSON.parse(localStorage.getItem("carts"))
const initialState = data ? data : []
const myReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_CART_ITEM:
            var { product, quantity, size } = action
            var idProduct = product.MASP
            var index = -1
            index = findIndexIdProduct(state, idProduct)

            if (index === -1) {
                var item = {}
                item.idCartItem = uuidv4()
                item.product = product
                item.size = size
                item.quantity = quantity
                state.push(item)
            }
            else {
                var indexSame = -1

                var boolean = false
                state.forEach((element, key) => {
                    if (element.size === size && element.product.MASP === product.MASP) {
                        indexSame = key
                        boolean = true
                    }
                    return boolean
                });
                console.log(boolean)
                if (boolean) {
                    state[indexSame].quantity += quantity
                }
                else {
                    item.idCartItem = uuidv4()
                    item.product = product
                    item.size = size
                    item.quantity = quantity
                    state.push(item)
                }
            }
            alert("Mua hàng thành công")
            localStorage.setItem("carts", JSON.stringify(state))
            return state


        case types.DELETE_CART_ITEM:
            var inndexCartDelete = -1
            inndexCartDelete = findIndexIdCartItem(state, action.idCartItem)
            if (inndexCartDelete !== -1) {
                state.splice(inndexCartDelete, 1)
            }
            else {
                alert("Xoá sản phẩm thất bại")
            }
            localStorage.setItem("carts", JSON.stringify(state))
            return [...state]
        case types.UPDATE_QUANTITY_CART_ITEM:
            var {value, quantity} = action
            var {idCartItem} = value
            var indexUpdateQuantity=  -1
            indexUpdateQuantity = findIndexIdCartItem(state, idCartItem)

            if(indexUpdateQuantity !== -1){
                state[indexUpdateQuantity].quantity += quantity

                if(state[indexUpdateQuantity].quantity === 0){
                    state.splice(indexUpdateQuantity, 1)
                }
            }
            localStorage.setItem("carts", JSON.stringify(state))
            return [...state]
        default:
            return state
    }
}

var findIndexIdProduct = (state, id) => {
    var index = -1
    state.findIndex((item, key) => {
        if (item.product.MASP === id)  index = key
    })
    return index
}
var findIndexIdCartItem = (state, id) => {
    var index = -1
    state.findIndex((item, key) => {
        if (item.idCartItem === id) index = key
    })
    return index
}
export default myReducer