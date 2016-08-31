'use strict'



isPangram(string){
	const az = [...'abcdefghijklmnopqrstuvwxyz'];
	let uniques = new Set([...string.replace(/\s+/g,'').toLowerCase()])
	let arr = Array.from(uniques).sort()

	if (JSON.stringify(arr)==JSON.stringify(az))return true;
	return false;

}
		

console.log(test('the quick brown fox jumps over the lazy dog'));