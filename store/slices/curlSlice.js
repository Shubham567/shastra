import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    curlText: "",
    curlJson : {},
    curlJs: "",
    conversionError: null,
};

const curlSlice = createSlice({
    name: "curl",
    initialState,
    reducers: {
        changeCurlText: (state, action) => {
            state.curlText = action.payload;
        },
        changeCurlJson: (state, action) => {
            state.curlJson = action.payload;
        },
        changeCurlJs: (state, action) => {
            state.curlJs = action.payload;
        },
        changeConversionError: (state, action) => {
            state.conversionError = action.payload;
        },
        changeCurlHeaders: (state, action) => {
            state.curlJson.headers = action.payload;
        },
        changeCurlCookies: (state, action) => {
            state.curlJson.cookies = action.payload;
        },
        changeCurlQueries: (state, action) => {
            state.curlJson.queries = action.payload;
        }
    }
});

export const {changeCurlText, changeCurlJs, changeCurlJson, changeConversionError, changeCurlCookies, changeCurlHeaders, changeCurlQueries} = curlSlice.actions;

export default curlSlice;