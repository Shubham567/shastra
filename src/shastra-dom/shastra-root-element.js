import shastraElement from "./shastra-element.js";

function shastraRootElement(shElement){

    const {domString, script} = shElement;

    const rootElement = shastraElement("html", {children : [
        shastraElement("head", {children: [
            shastraElement("title", {children: [
                "Shastra UI",
                ]}),
        ]}),
        shastraElement("body", {children: domString}),
    ]});

    return {
        "index.html": rootElement.domString,
    }
}

export default shastraRootElement;