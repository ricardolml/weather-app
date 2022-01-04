import { ConsolidatedWeather } from '../../../interfaces/interfaces';
import moment from 'moment';

interface Props {
    weatherD: ConsolidatedWeather
}

export const CardDayWeather = ({ weatherD }: Props) => {
    const date = moment(weatherD.applicable_date);
    return (
        <div className="bg-blue-f p-5 rounded-sm">
            <h2 className='text-center'>{date.format("ddd. DD MMM")}</h2>
            <div className='flex justify-center'>
                <img src={`https://www.metaweather.com/static/img/weather/${weatherD.weather_state_abbr}.svg`} className='w-20 mt-5 sm:w-10 2xl:w-20' alt="weather" />

            </div>
            <h3 className='text-center mt-3'> {weatherD.weather_state_name} </h3>
            <div className='flex justify-between gap-3 mt-2'>
                <h3 className='text-base sm:text-xs 2xl:text-base' >Máx: {Math.round(weatherD.max_temp)} °C</h3>
                <h3 className='text-base sm:text-xs 2xl:text-base' >Min: {Math.round(weatherD.min_temp)} °C</h3>
            </div>
        </div>
    )
}
