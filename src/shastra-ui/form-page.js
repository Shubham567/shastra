import shastraElement from "../shastra-dom/shastra-element.js";

const formPage = () => {
    return shastraElement("div", {},
        shastraElement("div", {},
            shastraElement("h1", {},"Form Page"),
            shastraElement("p", {}, "This is a form page"),
        ),
        shastraElement("div", {},
            shastraElement("form", {},
                shastraElement("div", {},
                    shastraElement("label",{},  "Name"),
                    shastraElement("input",{type: "text"}),
                ),
                shastraElement("div", {},
                    shastraElement("label",{},  "Email"),
                    shastraElement("input",{type: "email"}),
                ),
                shastraElement("div", {},
                    shastraElement("label",{},  "Password"),
                    shastraElement("input",{type: "password"}),
                ),
            ),
        ),
    );
}

export default formPage;