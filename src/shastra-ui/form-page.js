import s from "../shastra-dom/s";
import shastraButton from "./shastra-button.js";

const formPage = () => {
    return s("div", {className: "flex flex-col items-center justify-center pt-10"},
        s("div", {},
            s("h1", {},"Form Page"),
            s("p", {}, "This is a form page"),
        ),
        s("div", {},
            s("form", {},
                s("div", {className: "flex flex-col gap-4"},
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
                )
            ),
            s("div", {className: "flex justify-center"},
                shastraButton("button",{type: "submit",}),
            )
        ),
    );
}

export default formPage;