import shastraDomElement from "./shastra-dom-element.js";

function shastraElement(tagName, {_script = "", ...props}, ...children) {
    return {domString: shastraDomElement(tagName,props,  ...children.map(child => {
                return typeof child === "string" ? child : child.domString
            }))};
}

export default shastraElement;