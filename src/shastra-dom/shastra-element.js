import shastraDomElement from "./shastra-dom-element.js";

function shastraElement(tagName, {_script = "", ...props}, ...children) {

    return ((tabCount = 0) => ({domString: shastraDomElement(tagName,props,  ...children.map(child => {
            return (typeof child === "string" ? child :
                (typeof child === "function" ? child(tabCount + 1).domString :
                    (!!child ? "" : child.toString())))
        }))(tabCount)}));
}


export default shastraElement;