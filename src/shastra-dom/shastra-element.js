import shastraScriptElement from "./shastra-script-element.js";
import shastraDomElement from "./shastra-dom-element.js";

function shastraElement(tagName,{children = [], props = {}, script = ""}){
    return {domString: shastraDomElement(tagName,{children: children.map(child => typeof child === "string" ? child :child.domString), props})};
}

export default shastraElement;