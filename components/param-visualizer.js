import React, {memo} from 'react';
import {useDispatch, useSelector} from "react-redux";
import EntityVisualizer from "./entity-visualizer.js";
import {changeCurlHeaders, changeCurlQueries} from "../store/slices/curlSlice.js";

const ParamVisualizer = memo(() => {
    const params = useSelector(state => state.curlData.curlJson.queries) || {};
    const keys = Object.keys(params);

    const dispatch = useDispatch();

    const handleParamChange = (e) => {
        const {name, value} = e.target;
        const newParams = {...params};
        newParams[name] = value;
        dispatch(changeCurlQueries(newParams));
    }

    const handleParamDelete = (name) => {
        const newParams = {...params};
        delete newParams[name];
        dispatch(changeCurlQueries(newParams));
    }

    if(!keys.length) return null;
    return (
        <div>
            <div className={"mb-2"}>
                <h3 className={"text-gray-700 text-lg font-bold"}>
                    Query Params
                </h3>
            </div>
            {
                keys.map(key => {
                    return (
                        <div key={key}>
                            <EntityVisualizer entityName={key} entityValue={params[key]}
                                              handleEntityChange={handleParamChange}
                                              handleEntityDelete={handleParamDelete}
                            />
                        </div>
                    )
                })
            }
        </div>
    );
});

ParamVisualizer.displayName = 'ParamVisualizer';
export default ParamVisualizer;
