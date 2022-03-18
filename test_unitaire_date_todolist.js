//fonction test Date formatDate


let lib = require('./projet_func.js')


console.log(lib)
let aujourdhui = new Date()
console.log("date transmise pour le test :", aujourdhui )

testDateJ(aujourdhui)

testAnnee(aujourdhui)

function testDateJ(date){
	let dateF = lib.formatDate(date )
	console.log("Date formatée du jour :", dateF)
	if (dateF=="18/03/2022")
		{ console.log("nous sommes bien le ",dateF)}
	else 
		{console.log("nous ne souhaitons pas la date ",dateF)}
}


function testAnnee(date){
	let dateA = lib.formatDate(date )
	console.log("Date formatée pour 2022 :", dateA)
	if (dateA.includes('2022'))
		{ console.log("nous sommes bien en 2022 ",dateA)}
	else 
		{console.log("nous ne souhaitons pas 2022 ",dateA)}
}