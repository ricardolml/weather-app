import { Action, initialStateUi } from '../interfaces/interfaces';
import { types } from '../types/types';



const initialState: initialStateUi = {
    loading: false,
    menu: false
}

export const uiReducer = (state = initialState, action: Action): initialStateUi => {
    switch (action.type) {
        case types.uiStartLoading:
            return {
                ...state,
                loading: true
            }
        case types.uiFinishLoading:
            return {
                ...state,
                loading: false
            }
        case types.uiShowMenu:
            return {
                ...state,
                menu: true
            }
        case types.uiHideMenu:
            return {
                ...state,
                menu: false
            }
        default:
            return state;
    }
}