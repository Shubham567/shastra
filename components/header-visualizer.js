import React, {memo} from 'react';
import {useDispatch, useSelector} from "react-redux";
import EntityVisualizer from "./entity-visualizer.js";
import {changeCurlHeaders} from "../store/slices/curlSlice.js";

const HeaderVisualizer = memo(() => {
    const headers = useSelector(state => state.curlData.curlJson.headers) || {};
    const keys = Object.keys(headers);

    const dispatch = useDispatch();

    const handleHeaderChange = (e) => {
        const {name, value} = e.target;
        const newHeaders = {...headers};
        newHeaders[name] = value;
        dispatch(changeCurlHeaders(newHeaders));
    }

    const handleHeaderDelete = (name) => {
        const newHeaders = {...headers};
        delete newHeaders[name];
        dispatch(changeCurlHeaders(newHeaders));
    }


    if(!keys.length) return null;
    return (
        <div>
            <div className={"mb-2"}>
                <h3 className={"text-gray-700 text-lg font-medium"}>
                    Headers
                </h3>
            </div>
            {
                keys.map(key => {
                    if (key === "Cookie") {
                        return null;
                    }
                    return (
                        <div key={key}>
                            <EntityVisualizer entityName={key}
                                              entityValue={headers[key]}
                                              handleEntityChange={handleHeaderChange}
                                              handleEntityDelete={handleHeaderDelete} />
                        </div>
                    )
                })
            }
        </div>
    );
});

HeaderVisualizer.displayName = 'HeaderVisualizer';
export default HeaderVisualizer;
