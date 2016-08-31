class Transcriptor {
	toRna(dna){
		const pair = {C:'G', G:'C', A:'U',T:'A'};
		return dna.split('').map(dna => pair[dna]).join('')
	}
}

export default Transcriptor;
