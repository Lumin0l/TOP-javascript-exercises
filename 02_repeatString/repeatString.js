const { error } = require("console");

const repeatString = function(str, n) {
    let finalString = "";
    
    if (n < 0) {
        return ("ERROR");
    }

    for (let i = n; i > 0; i--) {
        
        finalString = finalString + str;
        /* finalString = finalString.concat("", str);
        console.log(finalString); */
    }

    
    /* console.log(finalString); */
    return (finalString);

};

/* repeatString("blin", 3); */

// Do not edit below this line
module.exports = repeatString;
