import { useDispatch, useSelector } from "react-redux";
import { City } from '../../../interfaces/interfaces';
import { setLocation } from '../../../actions/locationActions';
import { hideMenu } from "../../../actions/uiActions";

export const ListLocations = () => {

    const dispatch = useDispatch();
    const { locations } = useSelector((state: any) => state.location);

    const handleChangeCity = ( location: City ) => {
        dispatch( setLocation( location ) );
        dispatch( hideMenu() );
    }

    return (
        <div>
            <ul className="p-6">
                {
                    (locations.length > 0)
                    &&
                    (
                        locations.map((location: City) => (
                            <li key={location.woeid} className="flex justify-between p-3 cursor-pointer hover:text-blue-200" onClick={ () => handleChangeCity( location ) } >
                                <div className="ml-3 overflow-hidden">
                                    <p className="text-sm truncate"> {location.title} </p>
                                </div>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </div>
                            </li>
                        ))

                    )
                }
            </ul>
        </div>

    )
}
