//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

class Bob {
	isSilent(msg){return msg.trim()===''}
	isQuestion(msg){return msg.charAt(msg.length - 1) === '?'}
	isShouting(msg){return msg.toUpperCase()===msg && msg.toLowerCase() !== msg}
	isUnknown(){return true}
  hey(message) {
  	if(this.isSilent(message)){return 'Fine. Be that way!'}
  	if(this.isShouting(message)){return 'Whoa, chill out!'}
  	if(this.isQuestion(message)){return 'Sure.'}
  	if(this.isUnknown(message)){return 'Whatever.'}
  }
}

export default Bob;

