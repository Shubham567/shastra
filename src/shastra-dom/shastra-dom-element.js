const shastraDomElement = (tagName,{...props},...children) => {
    // General Element to be used for creating DOM elements
    // tagName: string
    // props: object
    // children: array
    const attributeString = Object.keys(props).map((key) => {
        if (key === "className") {
            return `class="${props[key]}"`;
        }
        // convert camelCase to kebab-case
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
};

export default shastraDomElement;
