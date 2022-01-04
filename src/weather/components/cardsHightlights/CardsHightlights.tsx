import { useSelector } from 'react-redux';
import { weatherInfo } from '../../../interfaces/interfaces';

export const CardsHightlights = () => {

    const { consolidated_weather } = useSelector((state : any): weatherInfo => state.weather);
    
    return (
        <div className='grid grid-col-1 lg:grid-cols-2 gap-4 2xl:gap-10'>
            <div className='bg-blue-f rounded-lg p-5 text-center'>
                <h1 className='text-xl'>wind status</h1>
                <h2>
                    <p className='text-6xl'>{Math.round(consolidated_weather[0].wind_speed)}<small className='text-3xl'>mph</small> </p>
                </h2>
            </div>
            <div className='bg-blue-f rounded-lg p-5 text-center'>
                <h1 className='text-xl'>Humidity</h1>
                <h2>
                    <p className='text-6xl'>{Math.round(consolidated_weather[0].humidity)}<small className='text-3xl'>%</small></p>
                </h2>
                <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200 mt-5">
                    <div style={{ width: `${Math.round(consolidated_weather[0].humidity)}%` }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"></div>
                </div>
            </div>
            <div className='bg-blue-f rounded-lg p-5 text-center'>
                <h1 className='text-xl'>Visibility</h1>
                <h2>
                    <p className='text-6xl'>{consolidated_weather[0].visibility.toPrecision(3)}<small className='text-3xl'> miles</small></p>
                </h2>
            </div>
            <div className='bg-blue-f rounded-lg p-5 text-center'>
                <h1 className='text-xl'>Air Pressure</h1>
                <h2>
                    <p className='text-6xl'>{Math.round(consolidated_weather[0].air_pressure)}<small className='text-3xl'> mb</small></p>
                </h2>
            </div>
        </div>
    )
}
