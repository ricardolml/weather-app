import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux"
import { getInformationWeather } from "../../actions/weatherActions"

import { weatherInfo } from '../../interfaces/interfaces';
import { showMenu } from '../../actions/uiActions';
import { CardDayWeather, CardsHightlights, CardWeatherMain, Loading, Menu } from '../components';




export const Home = () => {

    const weather = useSelector((state: any): weatherInfo => state.weather);
    const { citySelected } = useSelector((state: any) => state.location);
    const { loading } = useSelector((state: any) => state.ui);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getInformationWeather(citySelected.woeid))
    }, [dispatch, citySelected.woeid])

    const handleShowMenu = () => {
        dispatch(showMenu());
    }
    
    return (
        <div className='text-gray-200 '>
            <Menu />
            {
                (!weather.title || loading)
                    ?
                    <Loading />
                    :
                    <div className="grid grid-cols-1 lg:grid-cols-4 grid-rows-1">
                        <div className="h-screen p-5">
                            <div className="flex">
                                <button className=" bg-slate-700 p-2 px-4 rounded-lg " onClick={handleShowMenu} >Search for places</button>
                            </div>
                            <CardWeatherMain />
                        </div>
                        <div className="col-span-3 p-5">
                            <div className='flex justify-center flex-wrap mt-20 gap-5'>
                                {
                                    weather.consolidated_weather.map((weatherDay, index) => (index > 0) && <CardDayWeather key={weatherDay.id} weatherD={weatherDay} />)
                                }
                            </div>
                            <div className='mx-auto sm:mx-10 lg:mx-20 mt-20' >
                                <h1 className='text-3xl mb-3'>Today's Hightlights</h1>
                                <CardsHightlights />
                                <div className='flex justify-center text-xs mt-5'>
                                    created by Ricardo Espinoza - devChallenges.oi
                                </div>
                            </div>
                        </div>
                    </div>
            }

        </div>

    )
}
