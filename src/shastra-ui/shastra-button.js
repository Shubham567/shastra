import s from "../shastra-dom/s.js";

const shastraButton = (tagName = "button",{...props },text = "Submit") => {
    return s("button", {className: "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded", ...props}, text);
}


export default shastraButton;