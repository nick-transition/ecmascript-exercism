const notAlpha = /[^a-z]+/gi,
   		alphaLength = 26;
let uniques

class Pangram {
	constructor(string){
		let cleanString = string.replace(notAlpha,'').toLowerCase()
		uniques = new Set([...cleanString].sort())
	}	
	isPangram(){
	return uniques.size == alphaLength

	}

}


export default Pangram;