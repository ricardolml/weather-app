import { Action } from '../interfaces/interfaces';
import { types } from '../types/types';

export const weatherReducer = ( state = {} , action :Action ) => {

    switch (action.type) {
        case types.getWeather:
            return {
                ...state,
                ...action.payload
            };
    
        default:
            return state;
    }

}