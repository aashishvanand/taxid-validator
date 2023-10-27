
function validate_az_vat(vat, debug=false) {
    const validTypes = ['1', '2'];

    const lastDigit = vat[9];
    if (!validTypes.includes(lastDigit)) {
        if (debug) { 
            console.log("Invalid format");
        }
        return false;
    }

    return true;
}

module.exports = { validate_az_vat };
