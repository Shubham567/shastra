import {
    Sandpack,
    SandpackCodeEditor,
    SandpackLayout,
    SandpackPreview,
    SandpackProvider
} from "@codesandbox/sandpack-react";
import {useDispatch, useSelector} from "react-redux";
import {changeConversionError, changeCurlJs, changeCurlJson, changeCurlText} from "../store/slices/curlSlice";
import {useEffect, useState} from "react";
import axios from "axios";
import HeaderVisualizer from "../components/header-visualizer.js";
import CookieVisualizer from "../components/cookies-visualizer";
import ParamVisualizer from "../components/param-visualizer.js";
import CurlGeneralDetails from "../components/curl-general-details.js";
import {LightningBoltIcon} from "@heroicons/react/outline";
import shastraRootElement from "../src/shastra-dom/shastra-root-element.js";
import formPage from "../src/shastra-ui/form-page.js";
import ShastraUiSandpack from "../components/shastra-ui-sandpack.js";
import DataVisualizer from "../components/data-visualizer.js";


export default function Home() {

    const curlText = useSelector(state => state.curlData.curlText);
    const curlJson = useSelector(state => state.curlData.curlJson);
    const curlJs = useSelector(state => state.curlData.curlJs);
    const conversionError = useSelector(state => state.curlData.conversionError);

    const [loaded, setLoaded] = useState(false);

    console.log({curlText, curlJson, curlJs, conversionError});

    const dispatch = useDispatch();


    const handleCurlTextChange = (e) => {
        dispatch(changeCurlText(e.target.value));
    }

    const handleCurlConvert = (json,js) => {
        dispatch(changeCurlJson(json));
        dispatch(changeCurlJs(js));
    }

    const handleGenerate = (e) => {
        e.preventDefault();
        if (curlText) {
            (async () => {
                try {
                    dispatch(changeConversionError(null));
                    const res = await axios.post("/api/curl-convert", {curl: curlText})
                    const {json, js} = res.data;
                    handleCurlConvert(json, js);
                    changeConversionError(null);
                    setLoaded(true);
                }
                catch (e) {
                    dispatch(changeConversionError(e.message));
                    setLoaded(false);
                }
            })()
        }
    }



    return (
        <div className={"flex justify-center w-full"}>
            <div className={"p-4 max-w-6xl w-full"}>
                <div>
                    <form onSubmit={handleGenerate}>
                        <div className={"w-full mb-2"}>
                            <h1 className={"text-2xl text-gray-700 font-bold"}>
                                Paste a <span>Curl</span>
                            </h1>
                            <p className={"text-gray-500"}>
                                Paste a curl command and get valid UI
                            </p>
                        </div>
                        <div className={"w-full"}>
                            <textarea value={curlText} onChange={handleCurlTextChange} name="curl" id="curl" cols="30" rows="3" placeholder={"Paste a curl, For example: curl -d \"username=mkyong&password=abc\" http://localhost:8080/api/login/"} className={"p-2 resize-none outline outline-1 outline-gray-400 w-full rounded"}></textarea>
                        </div>
                        <div className={"flex justify-end items-center gap-2"}>
                            {/*<span>Quickly create ui from curl -&gt; </span>*/}
                            {/*clear button next*/}
                            {/*<button className={"px-4 py-2 bg-gray-700 rounded text-white"} type={"reset"}>Clear</button>*/}
                            <button className={"flex items-center gap-2 px-8 py-2 bg-indigo-700 rounded text-white text-lg font-semibold"} type={"submit"} >Generate UI <LightningBoltIcon className={"h-5"} /> </button>
                        </div>
                    </form>
                    {
                        conversionError &&
                        <div
                            className={"bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"}
                            role="alert">
                            <strong className="font-bold">Error!</strong>
                            <span className="block sm:inline">Invalid curl command</span>
                        </div>
                    }
                </div>
                {
                    !conversionError && loaded &&
                    <div className={"mt-4"}>
                        <div>
                            <div>
                                <h2 className={"mb-2 text-xl font-bold text-gray-700"}>Visualize and Select Input
                                    fields</h2>
                            </div>
                            <div>
                                {
                                        <div className={"p-2"}>
                                            <div className={"flex flex-col gap-2"}>
                                                <CurlGeneralDetails/>
                                                <ParamVisualizer/>
                                                <DataVisualizer />
                                                <HeaderVisualizer/>
                                                <CookieVisualizer/>
                                            </div>
                                        </div>
                                }
                            </div>
                        </div>
                        <ShastraUiSandpack/>
                    </div>}
            </div>
        </div>
    )
}