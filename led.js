class Led {


  constructor(x, y, state, colOn, colOff, size) {

    this.x = x;
    this.y = y;

    this.state = state;
    this.colOn = colOn;
    this.colOff = colOff;
    this.size = size;
  }

  show() {
    if(this.state) {

      fill(this.colOn);
      ellipse(this.x, this.y, this.size);

    } else {
      fill(this.colOff);
      ellipse(this.x, this.y, this.size);
    }
  }
}
