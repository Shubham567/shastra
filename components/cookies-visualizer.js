import React, {memo} from 'react';
import {useDispatch, useSelector} from "react-redux";
import EntityVisualizer from "./entity-visualizer.js";
import {changeCurlCookies, changeCurlQueries} from "../store/slices/curlSlice.js";
import {ArrowDownIcon, ChevronDownIcon} from "@heroicons/react/outline";
import clsx from "clsx";

const CookieVisualizer = memo(() => {
    const cookies = useSelector(state => state.curlData.curlJson.cookies) || {};
    const keys = Object.keys(cookies);

    const [expanded,setExpanded] = React.useState(false);

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
            <button className={"w-full focus:outline-none active:outline-none"} onClick={() => setExpanded(!expanded)}>
                <div className={"flex justify-between my-2"}>
                    <h3 className={"text-gray-700 text-lg font-bold"}>
                        Cookies
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
        </div>
    );
});

CookieVisualizer.displayName = 'CookieVisualizer';
export default CookieVisualizer;
