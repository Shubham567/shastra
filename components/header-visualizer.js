import React, {memo} from 'react';
import {useDispatch, useSelector} from "react-redux";
import EntityVisualizer from "./entity-visualizer.js";
import {changeCurlHeaders} from "../store/slices/curlSlice.js";
import {ChevronDownIcon} from "@heroicons/react/outline";
import clsx from "clsx";

const HeaderVisualizer = memo(() => {
    const headers = useSelector(state => state.curlData.curlJson.headers) || {};
    const keys = Object.keys(headers);

    const [expanded,setExpanded] = React.useState(false);

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
            <button className={"w-full focus:outline-none active:outline-none"} onClick={() => setExpanded(!expanded)}>
                <div className={"flex justify-between my-2"}>
                    <h3 className={"text-gray-700 text-lg font-bold"}>
                        Headers
                    </h3>
                    <div className={"flex items-center"}>
                        <span className={"sr-only"}>Collapse</span>
                        <ChevronDownIcon className={clsx("h-5 w-5 text-gray-400 transition", {"-rotate-180": expanded})} />
                    </div>
            </div>
            </button>
            <div className={clsx("transition duration-500", {"h-0 overflow-hidden" : !expanded, "h-full" : expanded})}>
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
        </div>
    );
});

HeaderVisualizer.displayName = 'HeaderVisualizer';
export default HeaderVisualizer;
