//partie function

// decoupage date 2 digits
function padTo2Digits(num) {
  return num.toString().padStart(2, '0');
}

// formatage date dd-mm-yyyy
function formatDate(date) {
//	console.log("date recue avant formatage : ",date)
  return [
    padTo2Digits(date.getDate()),
    padTo2Digits(date.getMonth() + 1),
    date.getFullYear(),
  ].join('/');
}

// Day date jour
function DateDay() {
    let inputFormat=Date();
    function pad(s) { return (s < 10) ? '0' + s : s; }
    var d = new Date(inputFormat)
    return [ d.getFullYear(),pad(d.getMonth() + 1),pad(d.getDate())].join('-')
}


//exports fonctions		
module.exports = {
    formatDate:formatDate ,
	DateDay:DateDay,
	padTo2Digits:padTo2Digits,
}
