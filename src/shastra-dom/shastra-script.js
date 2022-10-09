const shastraScript = (options = {}) => {
    const scripts = {
        "index.js" : `
window.shastraOptions = ${JSON.stringify(options)};

function shastraSubmitForm(e) {
    console.log("Form Submitted");
    e.preventDefault();
    const form = e.target;
}

const form = document.getElementById("shastra-form");
form.addEventListener("submit", shastraSubmitForm);
    
        `,
        "test.js" : `
`
    }


    return scripts;
}

export default shastraScript;