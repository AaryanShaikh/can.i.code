import { IS_INTRO, LOADING, ROUTE, THEME_COLOR, THEME_STYLE } from "../actions/types";

const initialState = {
    themeColor: "hsl(252, 35%, 51%)",
    themeStyle: "dark-theme",
    loading: true,
    route: "Home",
    isIntro: true
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

            case IS_INTRO:
            return {
                ...state,
                isIntro: payload
            }

        default:
            return state;
    }
}