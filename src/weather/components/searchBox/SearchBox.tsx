import { ChangeEvent, useRef } from "react";
import { useDispatch } from "react-redux";
import { ListLocations } from "..";
import { getLocations } from "../../../actions/locationActions";

export const SearchBox = () => {

    const dispatch = useDispatch();
    const debounceRef = useRef<NodeJS.Timeout>();

    const onQueryChanged = (event: ChangeEvent<HTMLInputElement>) => {
        if (debounceRef.current) {
            clearTimeout(debounceRef.current);
        }

        debounceRef.current = setTimeout(() => {

            dispatch(getLocations(event.target.value));

        }, 350);

    }

    return (
        <div>

            <div className='relative'>
                <div className="absolute inset-y-0 left-0 pl-3 lg:pl3 flex items-center pointer-events-none">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </div>
                <input onChange={onQueryChanged} autoComplete="off" name='location' type="text" className=' bg-transparent border-2 border-gray-500 rounded-xl w-full pl-9 p-2 focus:outline-none focus:border-blue-900' placeholder='Search location' />
            </div>
            <ListLocations />
        </div>
    )
}
