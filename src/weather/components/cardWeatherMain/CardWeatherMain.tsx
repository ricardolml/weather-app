import moment from 'moment';
import { useSelector } from 'react-redux';
import { weatherInfo } from '../../../interfaces/interfaces';

export const CardWeatherMain = () => {

    const weather = useSelector((state : any): weatherInfo => state.weather);
    const todayWeather = weather?.consolidated_weather[0];
    const date = moment( todayWeather.applicable_date );

    return (
        <>
            <div className="flex justify-center mt-20">
                <img src={`https://www.metaweather.com/static/img/weather/${todayWeather.weather_state_abbr}.svg`} alt="" className="w-44" />
            </div>
            <div className="flex justify-center mt-10">
                <h1 className="font-bold">
                    <span className="text-9xl">{ todayWeather.the_temp.toPrecision(2) }</span>
                    <span className="text-4xl ml-2">°C</span>
                </h1>
            </div>
            <div className="flex justify-center mt-10">
                <h1 className="text-4xl font-bold">
                    { todayWeather.weather_state_name}
                </h1>
            </div>
            <div className="flex justify-center mt-10 gap-4">
                <h1 className="text-xl font-bold">Today</h1>
                <h1 className="text-3xl font-bold -m-1">-</h1>
                <h1 className="text-xl font-bold"> { date.format("ddd. DD MMM") } </h1>
            </div>
            <div className="flex justify-center mt-10 gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <h2>{ weather.title }</h2>
            </div>
        </>
    )
}
