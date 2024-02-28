import React from 'react'

export const initialState={
  isNavigationOpen:false,
  isMenuOpen:false,
  isRightBarOpen:false,
  isEditProfileOpen:false
}




const AppReducer = (state,action) => {
    switch(action.type){
      case 'SET_NAVIGATION_OPEN':
      return{...state, isNavigationOpen:action.payload}

      case 'SET_MENU_OPEN':
        return{...state,isMenuOpen:action.payload}
      case 'SET_RIGHT_MENU_OPEN':
        return {...state,isRightBarOpen:action.payload};
        case 'SET_EDIT_PROFILE_OPEN':
        return {...state,isEditProfileOpen:action.payload}

      default:
        return state
    }
   

}

export default AppReducer