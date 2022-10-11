import {createSlice} from "@reduxjs/toolkit";
import {v5 as uuidV5, v4 as uuidV4} from "uuid";

const initialState = {
    curlText: "curl 'https://reqres.in/api/users?page=2&q2=shubham%40newron.ai&color=%230018c1' --compressed",
    curlJson : {},
    curlJs: "",
    conversionError: null,
    selectedFields: [],
};

const uuid_namespace = uuidV4();

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
        },
        addSelectedField: (state, action) => {
            const item = {...action.payload, data_id: uuidV5("shastra", uuidV4())};
            state.selectedFields.push(item);
        },
        removeSelectedField: (state, action) => {
            state.selectedFields = state.selectedFields.filter(item => item.data_id !== action.payload.data_id);
        }

    }
});

export const {
    changeCurlText,
    changeCurlJs,
    changeCurlJson,
    changeConversionError,
    changeCurlCookies,
    changeCurlHeaders,
    changeCurlQueries,
    addSelectedField,
    removeSelectedField
} = curlSlice.actions;

export default curlSlice;