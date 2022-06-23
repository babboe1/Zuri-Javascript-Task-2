let myName = 'Abiola Ayodele';
let height = '5.9"';
let country = 'Nigeria';

//This functions prints on screen
function details(name, height, country) {
	document.write(
		`<h1>
			NAME: ${name} <br/>HEIGHT: ${height} <br/>COUNTRY: ${country}
		</h1>,
	`,
	);
}
details(myName, height, country);



//This code prints in the terminal
console.log(`NAME: ${myName} \nHEIGHT: ${height} \nCOUNTRY: ${country}`);