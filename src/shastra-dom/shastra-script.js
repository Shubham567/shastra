const shastraScript = (options = {}) => {
    const scripts = {
        "index.js" : `window.shastraOptions = ${JSON.stringify(options, null, 2)};

function shastraSubmitForm(e) {
    console.log("Form Submitted");
    e.preventDefault();
    const form = e.target;
}

const form = document.getElementById("shastra-form");
form.addEventListener("submit", shastraSubmitForm);
    
        `,
        "hello.js" : `console.clear();
console.log("Hello World");
`
    }

    return {...scripts};
}

export default shastraScript;