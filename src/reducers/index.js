let userReducer = (state={cart: []}, action) => {
  switch(action.type) {
    case 'CHANGE_USER':
      return {...state, user: action.payload}
    case 'ADD_ITEM':
      console.log('adding items to cart')
      //over writing new users cart when page loads
      return {...state, user: {...state.user, cart: state.user.cart.concat(action.payload)}}
    default:
        return state
  }
}

export default userReducer;