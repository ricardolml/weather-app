import { Action, stateLocations } from '../interfaces/interfaces';
import { types } from '../types/types';

const initialState: stateLocations = {
    citySelected : {
        title: "Mexico City",
        location_type: "City",
        woeid: 116545,
        latt_long: "19.431900,-99.132851"
    },
    locations : []
    
}

export const locationsReducer = ( state = initialState , action :  Action ): stateLocations => {

    switch (action.type) {
        case types.setLocation:
            return {
                ...state,
                citySelected : action.payload,
                locations: []
            }
        case types.setLocations:
            return {
                ...state,
                locations: action.payload
            }    
        default:
            return state;
    }
}