function detectTextFields(value){
    value = value.trim();

    // Text type html input
    if(value.length === 0) return "text";

    // Color type html input
    if(value.match(/^#[a-fA-F0-9]{6}$/)) return "color";

    // Number type html input
    if(value.match(/^[0-9]+$/)) return "number";
    if(value.match(/^[0-9]+[.][0-9]+$/)) return "number";

    // Email type html input
    if(value.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)) return "email";

    // Phone Number type html input
    if(value.match(/^[0-9]{9,11}$/)) return "tel";
    if(value.match(/^\+[0-9]{1,3} [0-9]{10}$/)) return "tel";

    // URL type html input
    if(value.match(/^(http|https):\/\/[a-zA-Z0-9-_.]+\.[a-zA-Z]{2,4}$/)) return "url";

    // Password type html input
    if(value.match(/^[a-zA-Z0-9@#$%^&*()_+]{8,}$/)) return "password";

    // Date type html input
    if(value.match(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)) return "date";


    return "text";
}

export default detectTextFields;