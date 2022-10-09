import s from "./s";
import shastraScript from "./shastra-script.js";

function shastraRootElement(shElement, options = {}) {

    const {domString, script} = shElement();

    const scripts = shastraScript();

    const rootElement = s("html", {lang: "en"},
        s("head", {},
            s("title",{},
                "Shastra UI",
                ),
            s("meta", {charset: "utf-8"}),
            s("meta", {name: "viewport", content: "width=device-width, initial-scale=1"}),
            // s("script", {src: "https://cdn.tailwindcss.com?plugins=forms,typography,aspect-ratio,line-clamp"})
        ),
        s("body", {},
            s("div", {id: "app"},
                domString,
            ),
        ),
        ...Object.keys(scripts).map(scriptFile => s("script", {src: `${scriptFile}`})),
        s("script", {src: "https://cdn.tailwindcss.com"}),
        s("script", {src: "https://cdnjs.cloudflare.com/ajax/libs/axios/1.1.2/axios.min.js"}),
    );

    return {
        "index.html": "<!doctype html>\n"+rootElement().domString,
        ...scripts
    }
}

export default shastraRootElement;