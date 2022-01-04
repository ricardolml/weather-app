import { api } from '../api';
import { weatherInfo } from '../interfaces/interfaces';
import { types } from '../types/types';
import { startLoading, finishLoading } from './uiActions';

export const getInformationWeather = (id: number) => {

    return async (dispatch: any) => {
        dispatch(startLoading());
        const { data } = await api.get<weatherInfo>(`/${id}/`);
        dispatch(setInformationWeather(data));
        dispatch(finishLoading());
    }
}

export const setInformationWeather = (data: weatherInfo) => ({
    type: types.getWeather,
    payload: data
})