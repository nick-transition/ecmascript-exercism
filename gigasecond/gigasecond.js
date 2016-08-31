
class Gigasecond {
  constructor(d) {
    this.input_date = d;
  }
  date() {
    return new Date( Date.parse(this.input_date) + Math.pow(10,12) );
  }
}

export default Gigasecond;