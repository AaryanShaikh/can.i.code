import { LOADING, ROUTE, THEME_COLOR, THEME_STYLE } from "../actions/types";

const initialState = {
    themeColor: "hsl(252, 35%, 51%)",
    themeStyle: "dark-theme",
    loading: true,
    route: "Home"
};

export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case THEME_COLOR:
            return {
                ...state,
                themeColor: payload
            }

        case THEME_STYLE:
            return {
                ...state,
                themeStyle: payload
            }

        case LOADING:
            return {
                ...state,
                loading: payload
            }

        case ROUTE:
            return {
                ...state,
                route: payload
            }

        default:
            return state;
    }
}