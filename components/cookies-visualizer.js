import React, {memo} from 'react';
import {useDispatch, useSelector} from "react-redux";
import EntityVisualizer from "./entity-visualizer.js";
import {changeCurlCookies, changeCurlQueries} from "../store/slices/curlSlice.js";

const CookieVisualizer = memo(() => {
    const cookies = useSelector(state => state.curlData.curlJson.cookies) || {};
    const keys = Object.keys(cookies);

    const dispatch = useDispatch();

    const handleCookiesChange = (e) => {
        const {name, value} = e.target;
        const newCookies = {...cookies};
        newCookies[name] = value;
        dispatch(changeCurlCookies(newCookies));
    }

    const handleCookiesDelete = (name) => {
        const newCookies = {...cookies};
        delete newCookies[name];
        dispatch(changeCurlCookies(newCookies));
    }

    if(!keys.length) return null;
    return (
        <div>
            <div className={"mb-2"}>
                <h3 className={"text-gray-700 text-lg font-medium"}>
                    Cookies
                </h3>
            </div>
            {
                keys.map(key => {
                    return (
                        <div key={key}>
                            <EntityVisualizer entityName={key} entityValue={cookies[key]}
                                                handleEntityChange={handleCookiesChange}
                                                handleEntityDelete={handleCookiesDelete}
                            />
                        </div>
                    )
                })
            }
        </div>
    );
});

CookieVisualizer.displayName = 'CookieVisualizer';
export default CookieVisualizer;
