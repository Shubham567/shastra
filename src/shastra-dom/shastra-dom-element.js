import camelCaseToKebabCase from "./camelCaseToKebabCase.js";

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
        const kebabCaseKey = camelCaseToKebabCase(key);
        return `${kebabCaseKey}="${props[key]}"`;
    }).join(' ');

    return (
`<${tagName} ${attributeString}>
    ${typeof children === "string" ? children : children.join('\n')}
</${tagName}>`
    );
};

export default shastraDomElement;
