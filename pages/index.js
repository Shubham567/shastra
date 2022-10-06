import {Sandpack} from "@codesandbox/sandpack-react";
import {useDispatch, useSelector} from "react-redux";
import {changeConversionError, changeCurlJs, changeCurlJson, changeCurlText} from "../store/slices/curlSlice";
import {useEffect} from "react";
import axios from "axios";
import HeaderVisualizer from "../components/header-visualizer.js";
import CookieVisualizer from "../components/cookies-visualizer";
import ParamVisualizer from "../components/param-visualizer.js";


export default function Home() {

    const curlText = useSelector(state => state.curlData.curlText);
    const curlJson = useSelector(state => state.curlData.curlJson);
    const curlJs = useSelector(state => state.curlData.curlJs);
    const conversionError = useSelector(state => state.curlData.conversionError);

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
                    const res = await axios.post("/api/curl-convert", {curl: curlText})
                    const {json, js} = res.data;
                    handleCurlConvert(json, js);
                    changeConversionError(null);
                }
                catch (e) {
                    dispatch(changeConversionError(e.message));
                }
            })()
        }
    }

    useEffect(() => {

    }, [])


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
                            <button className={"px-4 py-2 bg-gray-700 rounded text-white"} type={"reset"}>Clear</button>
                            <button className={"px-4 py-2 bg-indigo-700 rounded text-white"} type={"submit"} >Generate UI</button>
                        </div>
                    </form>
                </div>
                <div className={"mt-4"}>
                    <div>
                        <h2 className={"mb-2 text-xl font-bold text-gray-700"}>Visualize</h2>
                    </div>
                    <div>
                        {
                            conversionError ?
                                <div className={"bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"} role="alert">
                                    <strong className="font-bold">Error!</strong>
                                    <span className="block sm:inline">Invalid curl command</span>
                                </div>
                                :
                                <div>
                                    <HeaderVisualizer />
                                    <CookieVisualizer />
                                    <ParamVisualizer />
                                </div>
                        }
                    </div>
                </div>
                <div className={"mt-2 h-96"}>
                    <div>
                        <h2 className={"text-xl font-bold text-gray-700"}>Preview and Edit</h2>
                    </div>
                    <Sandpack
                        theme={"dark"}
                        template={"vanilla"}
                        entry={"/index.html"}
                        customSetup={{
                            dependencies: {

                            }
                        }}
                        files={{
                            "index.html": `<html>
    <head>
        <title>Generated UI</title>
    </head>
    <body>
        <h1>Generated UI</h1>
        <div id="app"></div>
    </body>
</html>`,
                            "index.js": `const app = document.getElementById("app");
app.innerHTML = "<h1>Hello World</h1>";`
                        }}
                    />;
                </div>
            </div>
        </div>
    )
}