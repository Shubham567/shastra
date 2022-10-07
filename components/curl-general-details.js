import React from 'react';
import {useSelector} from "react-redux";

const CurlGeneralDetails = () => {
    const url = useSelector(state => state.curlData.curlJson.url);
    const method = useSelector(state => state.curlData.curlJson.method);

    return (
        <div>
            <div className={"flex"}>
                <div className={"flex-1"}>
                    <div className={"text-sm font-semibold p-1"}>
                        URL
                    </div>
                    <div className={"pr-1"}>
                        <textarea rows={1} className={"w-full py-2 px-1 resize-none focus:outline focus:outline-1 outline-gray-400 w-full rounded overflow-y-auto"} value={url} readOnly />
                    </div>
                </div>
                <div>
                    <div className={"text-sm font-semibold p-1"}>
                        Method
                    </div>
                    <div>
                        <textarea rows={1} className={"w-full py-2 px-1 resize-none focus:outline focus:outline-1 outline-gray-400 w-full rounded overflow-y-auto"} value={method} readOnly />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CurlGeneralDetails;
