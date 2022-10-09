import s from "../shastra-dom/s.js";

const colors = {
    primary: "bg-indigo-700 hover:bg-indigo-800 text-white",
    secondary: "bg-gray-200 hover:bg-gray-300 text-gray-600",
    success: "bg-green-700 hover:bg-green-800 text-white",
    danger: "bg-red-700 hover:bg-red-800 text-white",
}

const shastraButton = (tagName = "button",{className = "",color = "primary", ...props },text = "Submit") => {
    return s("button",
        {className: `font-bold py-2 px-6 rounded ${colors[color]} ${className}`, ...props}, text);
}


export default shastraButton;