import React from 'react';
import PropTypes from 'prop-types';
import {SandpackCodeEditor, SandpackLayout, SandpackPreview, SandpackProvider} from "@codesandbox/sandpack-react";
import shastraRootElement from "../src/shastra-dom/shastra-root-element.js";
import formPage from "../src/shastra-ui/form-page.js";

const height = 500;

const ShastraUiSandpack = props => {
    const [advancedView, setAdvancedView] = React.useState(false);
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
                        recompileMode: "immediate",
                        externalResources: [
                            "https://cdn.tailwindcss.com",
                            "https://cdnjs.cloudflare.com/ajax/libs/axios/1.1.2/axios.min.js",
                            // "https://unpkg.com/@tailwindcss/ui/dist/tailwind-ui.min.css",
                            // "https://cdn.tailwindcss.com?plugins=forms,typography,aspect-ratio,line-clamp"
                        ],
                        // showConsole: true,
                    }}

                    customSetup={{
                        environment: "parcel",
                        entry: "index.html",
                    }}
                    files={shastraRootElement(formPage())}
                >
                    <SandpackLayout style={{height}}>
                        { advancedView && <SandpackCodeEditor style={{height}}/>}
                        <SandpackPreview style={{height}}/>
                    </SandpackLayout>
                </SandpackProvider>
            </div>
        </div>
    );
};

ShastraUiSandpack.propTypes = {

};

export default ShastraUiSandpack;
