class Cell {


  constructor(x, y, colOn, colOff, size) {
    this.x = x;
    this.y = y;
    this.colOn = colOn;
    this.colOff = colOff;
    this.size = size;
  }

  show(digits) {

    let binary;
    if(digits == null) {
      binary = '00000000000000000000000000000000000'
    } else {
      binary = digits.split('');
    }
    let leds = [];
    let flash;

    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 7; j++) {
          if (binary[j * 5 + i] == 1) {flash = true;}
            leds[j * 5 + i] = new Led(this.x + this.size * i, this.y + this.size * (j + 1), flash, this.colOn, this.colOff, this.size);
          flash = false;
      }
    }

    for (let i = 0; i < leds.length; i++) {
      leds[i].show();
    }
  }

}
