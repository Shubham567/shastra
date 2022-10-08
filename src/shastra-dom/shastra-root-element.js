import s from "./s";

function shastraRootElement(shElement){

    const {domString, script} = shElement();

    const rootElement = s("html", {lang: "en"},
        s("head", {},
            s("title",{},
                "Shastra UI",
                ),
            s("meta", {charset: "utf-8"}),
            s("meta", {name: "viewport", content: "width=device-width, initial-scale=1"}),
            s("script", {src: "https://cdn.tailwindcss.com"}),
        ),
        s("body", {},
            s("div", {id: "app"},
                domString,
            ),
        ),
    );

    return {
        "index.html": "<!doctype html>\n"+rootElement().domString,
        "index.js": "",
        // "src/index.js": {
        //     code : "",
        //     hidden: true,
        // },
    }
}

export default shastraRootElement;