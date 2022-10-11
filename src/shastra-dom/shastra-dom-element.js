const shastraDomElement = (tagName,{...props},...children) => {
    // General Element to be used for creating DOM elements

    children = children.filter(child => child !== null);
    const filteredProps = {};
    Object.keys(props).forEach(key => !!props[key] ? filteredProps[key] = props[key] : null);
    const attributeString = Object.keys(props).map((key) => {
        if (key === "className") {
            return `class="${props[key]}"`;
        }
        const lowerCaseKey = key.toLowerCase();
        return `${lowerCaseKey}="${props[key]}"`;
    }).join(' ');

    return ( (tabCount) => {
            return `<${tagName}${attributeString && attributeString.length ? " "+attributeString:""}>${!children.length ? 
                `</${tagName}>` : ""}${children.length ? `\n${"    ".repeat(tabCount)}${typeof children === "string" ? 
                children : children.join(`\n${"    ".repeat(tabCount)}`)}
${"    ".repeat(tabCount - 1 < 0 ? 0 : tabCount - 1)}</${tagName}>` : ""}`
        }
    );
    //    pew! pew! pew pew pew
};

export default shastraDomElement;
