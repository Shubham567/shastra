import shastraDomElement from "./shastra-dom-element.js";

function shastraElement(tagName, {_script = "", ...props}, ...children) {
    return (tabCount = 0) => ({domString: shastraDomElement(tagName,props,  ...children.map(child => {
                return typeof child === "string" ? child : child(tabCount + 1).domString
            }))(tabCount)});
}

export default shastraElement;