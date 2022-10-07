const shastraScriptElement = ({code,fileName}, parent = {"index.js" : ""}) => {
    const codeStr = `${code}\n`;
    parent[fileName] += codeStr;
    return parent;
}

export default shastraScriptElement;