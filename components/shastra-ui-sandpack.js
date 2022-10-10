import React from 'react';
import PropTypes from 'prop-types';
import {
    SandpackCodeEditor,
    SandpackConsole,
    SandpackLayout,
    SandpackPreview,
    SandpackProvider
} from "@codesandbox/sandpack-react";
import shastraRootElement from "../src/shastra-dom/shastra-root-element.js";
import formPage from "../src/shastra-ui/form-page.js";
import clsx from "clsx";
import {useSelector} from "react-redux";

const height = 500;
const consoleHeight = 200;

const CommandLineIcon = () => {
    return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
    </svg>

}


const ShastraUiSandpack = props => {
    const [advancedView, setAdvancedView] = React.useState(false);
    const [showConsole, setShowConsole] = React.useState(false);

    const dataJson = useSelector(state => state.curlData.curlJson);

    return (
        <div className={"mt-2"} >
            <div className={"flex justify-between items-center"}>
                <h2 className={"text-xl font-bold text-gray-700"}>Preview and Edit</h2>
                <fieldset className={"flex gap-1"}>
                    <input id={"show-code"} name={"show-code"} defaultChecked={advancedView} onChange={(e) => setAdvancedView(e.target.checked)} type={"checkbox"} />
                    <label htmlFor={"show-code"} className={"text-gray-500 text-sm"}>Show generated code</label>
                </fieldset>
            </div>
            <div style={{height}}>
                <SandpackProvider
                    className={"h-full"}
                    theme={"light"}
                    template={"vanilla"}
                    style={{height}}
                    options={{
                        activeFile: "index.html",
                        autorun: true,
                        // closableTabs: true,
                        // showConsole: true,
                        // showConsoleButton: true,
                        recompileMode: "immediate",
                        externalResources: [
                            "https://cdn.tailwindcss.com",
                            "https://cdnjs.cloudflare.com/ajax/libs/axios/1.1.2/axios.min.js",
                            // "https://unpkg.com/@tailwindcss/ui/dist/tailwind-ui.min.css",
                            // "https://cdn.tailwindcss.com?plugins=forms,typography,aspect-ratio,line-clamp"
                        ],
                    }}

                    customSetup={{
                        environment: "parcel",
                        entry: "index.html",
                    }}
                    files={shastraRootElement(formPage({...dataJson}))}
                >
                    <SandpackLayout style={{height}}>
                        { advancedView && <SandpackCodeEditor style={{height}}/>}
                        <div style={{height}} className={"flex flex-1 flex-col w-full"}>
                            <SandpackPreview className={"w-full"} style={{height: showConsole ? height - consoleHeight : height}}
                                             actionsChildren={
                                <button onClick={() => setShowConsole(!showConsole)} className={clsx("text-gray-500 rounded-full h-7 w-7 flex items-center justify-center", {"bg-gray-200": !showConsole, "bg-gray-300" : showConsole})} >
                                    <span className={"sr-only"}>Show console</span>
                                    <CommandLineIcon />
                                </button>
                                             }
                            />
                            { showConsole && <SandpackConsole style={{height: consoleHeight}}/>}
                        </div>

                    </SandpackLayout>
                </SandpackProvider>
            </div>
        </div>
    );
};

ShastraUiSandpack.propTypes = {

};

export default ShastraUiSandpack;
