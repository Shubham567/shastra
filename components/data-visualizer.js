import React, {memo} from 'react';
import {useDispatch, useSelector} from "react-redux";
import EntityVisualizer from "./entity-visualizer.js";
import {changeCurlHeaders, changeCurlQueries} from "../store/slices/curlSlice.js";

const DataVisualizer = memo(() => {
    const data = useSelector(state => state.curlData.curlJson.data) || {};
    const keys = Object.keys(data);

    const dispatch = useDispatch();

    const handleDataChange = (e) => {
        const {name, value} = e.target;
        const newParams = {...data};
        newParams[name] = value;
        dispatch(changeCurlQueries(newParams));
    }

    const handleParamDelete = (name) => {
        const newParams = {...data};
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
                            <EntityVisualizer entityName={key} entityValue={data[key]}
                                              handleEntityChange={handleDataChange}
                                              handleEntityDelete={handleParamDelete}
                            />
                        </div>
                    )
                })
            }
        </div>
    );
});

DataVisualizer.displayName = 'ParamVisualizer';
export default DataVisualizer;
