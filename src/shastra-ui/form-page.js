import s from "../shastra-dom/s";
import shastraButton from "./shastra-button.js";

const formPage = () => {
    return s("div", {},
        s("div", {},
            s("h1", {},"Form Page"),
            s("p", {}, "This is a form page"),
        ),
        s("div", {},
            s("form", {},
                s("div", {},
                    s("label",{},  "Name"),
                    s("input",{type: "text"}),
                ),
                s("div", {},
                    s("label",{},  "Email"),
                    s("input",{type: "email"}),
                ),
                s("div", {},
                    s("label",{},  "Password"),
                    s("input",{type: "password"}),
                ),
            ),
            shastraButton("button",{type: "submit",}),
        ),
    );
}

export default formPage;