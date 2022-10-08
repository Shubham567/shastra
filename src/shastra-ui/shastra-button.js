import s from "../shastra-dom/s.js";

const shastraButton = (tagName = "button",{...props },text = "Submit") => {
    return s("button", {className: "bg-indigo-700 hover:bg-indigo-800 text-white font-bold py-2 px-6 rounded", ...props}, text);
}


export default shastraButton;