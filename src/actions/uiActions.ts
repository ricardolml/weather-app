import { types } from '../types/types';

export const startLoading = () =>({
    type : types.uiStartLoading,
})

export const finishLoading = () =>({
    type : types.uiFinishLoading,
})

export const showMenu = () =>({
    type : types.uiShowMenu,
})

export const hideMenu = () =>({
    type : types.uiHideMenu,
})