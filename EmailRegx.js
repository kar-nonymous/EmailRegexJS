{
    let pinCode = 'kumar.kartikeya@capgemini.com';
    let regexPattern = RegExp('[a-zA-Z0-9]+([+-_.][a-zA-Z0-9]+)*[@][a-zA-Z0-9]+[.][a-zA-Z]+([.][a-zA-Z]{2})*$');
    if (regexPattern.test(pinCode))
    {
        console.log("Valid email");
    } 
    else
    {
        console.log("Invalid email");
    }
}