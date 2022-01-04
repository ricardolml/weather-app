import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { useDispatch, useSelector } from 'react-redux'
import { hideMenu } from '../../../actions/uiActions';
import { SearchBox } from '../searchBox/SearchBox';

export const Menu = () => {

    const { menu } = useSelector((state: any) => state.ui);
    const dispatch = useDispatch();

    const handleHideMenu = () => {
        dispatch(hideMenu());
    }

    

    return (
        <Transition show={menu} as={Fragment}>
            <Dialog as="div" className="fixed inset-0 overflow-hidden" onClose={handleHideMenu}>
                <div className="absolute inset-0 overflow-hidden">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-in-out duration-500"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in-out duration-500"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Dialog.Overlay className="absolute inset-0 bg-gray-800 bg-opacity-75 transition-opacity" />
                    </Transition.Child>
                    <div className="fixed inset-y-0 left-0 pr-10 max-w-full flex">
                        <Transition.Child
                            as={Fragment}
                            enter="transform transition ease-in-out duration-500 sm:duration-700"
                            enterFrom="-translate-x-full"
                            enterTo="translate-x-0"
                            leave="transform transition ease-in-out duration-500 sm:duration-700"
                            leaveFrom="translate-x-0"
                            leaveTo="-translate-x-full"
                        >
                            <div className="relative w-screen max-w-sm">
                                <Transition.Child
                                    as={Fragment}
                                    enter="ease-in-out duration-500"
                                    enterFrom="opacity-0"
                                    enterTo="opacity-100"
                                    leave="ease-in-out duration-500"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                >
                                    <div className="absolute top-0 right-0 -mr-12 pt-4 pr-4 flex sm:-ml-10 sm:pr-4">
                                        <button
                                            type="button"
                                            className="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                                            onClick={handleHideMenu}
                                        >
                                            <span className="sr-only">Close panel</span>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </button>
                                    </div>
                                </Transition.Child>
                                <div className="text-gray-200 h-full flex flex-col py-6 bg-gradient-to-t from-blue-900 to-black shadow-xl">

                                    <div className="mt-6 relative flex-1 px-4 sm:px-6">
                                        {/* Content */}
                                        <div className="absolute inset-0 px-4 sm:px-6">
                                            <SearchBox />
                                        </div>
                                        {/* /End Content */}
                                    </div>
                                </div>
                            </div>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    )
}
