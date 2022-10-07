import shastraElement from "./shastra-element.js";

function shastraRootElement(shElement){

    const {domString, script} = shElement;

    const rootElement = shastraElement("html", {},
        shastraElement("head", {},
            shastraElement("title",{},
                "Shastra UI",
                ),
        ),
        shastraElement("body", {},
            shastraElement("div", {id: "app"},
                domString,
            ),
        ),
    );

    return {
        "index.html": rootElement.domString,
    }
}

export default shastraRootElement;