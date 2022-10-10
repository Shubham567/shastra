const shastraScript = (options = {}) => {
    const scripts = {
        "index.js" : `window.shastraOptions = ${JSON.stringify(options, null, 2)};

console.log("Welcome to Shastra Ui");

function shastraSubmitForm(e) {
    console.log("Form Submit Initiated");
    e.preventDefault();
    const form = e.target;
}

const form = document.getElementById("shastra-form");
form.addEventListener("submit", shastraSubmitForm);
    
        `
    }

    return {...scripts};
}

export default shastraScript;