import { api } from "../api";
import { City } from '../interfaces/interfaces';
import { types } from '../types/types';

export const getLocations = (location: string) => {

    return async ( dispatch: Function ) => {
        const { data } = await api.get<City[]>(`/search`, {
            params: {
                query: location
            }
        });
        dispatch( setLocations(data) );
    }

}

export const setLocation = ( location: City ) => ({
    type : types.setLocation,
    payload : location   
})

export const setLocations = ( locations : City[] ) => ({
    type: types.setLocations,
    payload : locations
})