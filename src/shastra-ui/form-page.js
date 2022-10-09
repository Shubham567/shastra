import s from "../shastra-dom/s";
import shastraButton from "./shastra-button.js";
import shastraInput from "./shastra-input.js";

const formPage = () => {
    return s("div", {className: "flex flex-col items-center justify-center pt-10 gap-8"},
        s("div", {className: "w-full max-w-sm flex justify-between items-center"},
            s("div", {className: "flex flex-col"},
            s("h1", {className: "text-xl font-bold text-indigo-700"},"Shastra"),
            s("p", {className: "text-sm text-gray-400"}, "Generated UI from CURL"),
            ),
            s("div", {className: "text-indigo-700"},
                "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\" class=\"w-6 h-6\">\n" +
                "  <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z\" />\n" +
                "</svg>\n"
            )

        ),
        s("div", {className: "w-full max-w-sm"},
            s("form", {"id": "shastra-form"},
                s("div", {className: "flex flex-col gap-4"},
                    shastraInput("Name", {type: "text", required: false}),
                    shastraInput("Email", {type: "email", required: true}),
                    shastraInput("Password", {type: "password", required: true}),
                    shastraInput("Description", {type: "text",row : 2, required: true}),
                    shastraInput("File", {type: "file", required: true}),
                    s("div", {className: "flex justify-between gap-2"},
                        shastraButton("button",{type: "reset", className: "flex-1 font-normal", color: "secondary"}, "Clear"),
                        shastraButton("button",{type: "submit", className: "flex-1"}),
                    )
                )
            ),

        ),
    );
}

export default formPage;