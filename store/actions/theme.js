import { IS_INTRO, LOADING, ROUTE, THEME_COLOR, THEME_STYLE } from "./types";

export const handlethemeSelected = (data) => (dispatch) => {
    try {
        dispatch({
            type: THEME_COLOR,
            payload: data
        });
    } catch (err) {
        console.log('error in handlethemeSelected', err);
    }
}

export const handlethemeStyleSelected = (data) => (dispatch) => {
    try {
        dispatch({
            type: THEME_STYLE,
            payload: data
        });
    } catch (err) {
        console.log('error in handlethemeStyleSelected', err);
    }
}

export const handleLoading = (data) => (dispatch) => {
    try {
        dispatch({
            type: LOADING,
            payload: data
        });
    } catch (err) {
        console.log('error in handleLoading', err);
    }
}

export const handleRouteSelected = (data) => (dispatch) => {
    try {
        dispatch({
            type: ROUTE,
            payload: data
        });
    } catch (err) {
        console.log('error in handleRouteSelected', err);
    }
}

export const handleIsIntro = (data) => (dispatch) => {
    try {
        dispatch({
            type: IS_INTRO,
            payload: data
        });
    } catch (err) {
        console.log('error in handleIsIntro', err);
    }
}