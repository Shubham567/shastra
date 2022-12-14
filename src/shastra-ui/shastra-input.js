import s from "../shastra-dom/s.js";
import clsx from "clsx";
import detectTextFields from "../detect-text-fields.js";

const placeHolders = {
    tel : "+91 1234567890",
    email : "someone@example.com",
    password : "********",
    text : `Enter text here`,
    number : "Enter number here",
    date : "Enter date here",
    time : "Enter time here",
    url : "http://www.example.com",
    search : "Enter search text here",
    color : "#000000",
    file : null,
}


const shastraInput  = (name,
                       {
                           label,
                           rows,
                           type = "text",
                           required,
                           value,
                           useCurlValues,
                           className = ""
                           , ...props
                       },
                       ...children) => {
    let tagName = "input";
    if(rows && rows > 1 && type === "text"){
        tagName = "textarea";
    }

    if(!label){
        label = name;
    }

    const derivedType = detectTextFields(value);

    return s("div", {
        className: "bg-gray-50 rounded-md p-2 flex flex-col gap-1 w-full",
        },
        s("div", {className: "flex justify-between px-1"},
            s("label", {className: "block text-sm font-medium text-indigo-600 capitalize", htmlFor: name, id: `label-${name}`}, label),
            s("span", {className: clsx({"text-red-500 text-sm": required, "text-sm text-gray-400" : !required})}, required ? "*" : "Optional"),
        ),
        s("div", {className: "mt-1"},
            s(
                tagName,
                {
                    name,
                    type : derivedType,
                    id: name,
                    placeholder: placeHolders[derivedType],
                    rows,
                    value : useCurlValues ? value : "",
                    className: `p-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-transparent focus:outline-indigo-500 sm:text-sm resize-none bg-white text-gray-700 ${className}`,
                    ...props
                },
                tagName === "textarea" ? props.value : ""
            )
        )
    )
}

export default shastraInput;