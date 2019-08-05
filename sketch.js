let globalCounter = 0;
let localCounter = 0;

let colorOn;
let colorOff;
let size;
let margin;
let myWidth;
let time1;
let time2;
let bliper;
let pause;

var sentence;
var storyNumber;

function setup() {
  createCanvas(800, 600);
  //loadConfig(3);
  loadStory(3);

}

function draw() {
  background(0);

  //creating displays
  let cells = [];
  for (let i = 0; i < myWidth; i++) {
    for (let j = 0; j < myHeight; j++) {
      cells[j * myWidth + i] = new Cell(margin + size * 6 * i, margin + size * 10  * j, colorOn, colorOff, size);
    }
  }

  //sending to display
  for (let i = 0; i < cells.length; i++) {
    cells[i].show(convert(sentence[i]));
  }

  //Stories--------

  //Main menu
  if (storyNumber == 0) {
    showText(pause * 0,getText(0, 0, 0), getText(0, 0, 1));
    showText(pause * 1,getText(0, 1, 0), getText(0, 1, 1));
    showText(pause * 2,getText(0, 2, 0), getText(0, 2, 1));
    showText(pause * 3,getText(0, 3, 0), getText(0, 3, 1));
    showText(pause * 4,getText(0, 4, 0), getText(0, 4, 1));

    blip();

    if(key === '1' ) loadStory(3);
    else if (key === '2') loadStory(2);
    else if (key === '3') loadStory(1);

  }


  //configuration
  if (storyNumber == 1) {
    showText(pause * 1,getText(1, 0, 0), getText(1, 0, 1));
    showText(pause * 1,getText(1, 1, 0), getText(1, 1, 1));
    showText(pause * 1,getText(1, 2, 0), getText(1, 2, 1));
    showText(pause * 1,getText(1, 3, 0), getText(1, 3, 1));
    showText(pause * 1,getText(1, 4, 0), getText(1, 4, 1));
    showText(pause * 1,getText(1, 5, 0), getText(1, 5, 1));

    blip();

    if(key === '1' ) loadConfig(1);
    else if (key === '2') loadConfig(2);
    else if (key === '3') loadConfig(3);
    else if (key === '0') loadStory(0);
  }


  //CV
  if (storyNumber == 2) {
    loadConfig(3);
    showText(pause * 0,getText(2, 0, 0), getText(2, 0, 1));
    showText(pause * 1,getText(2, 1, 0), getText(2, 1, 1));
    showText(pause * 2,getText(2, 2, 0), getText(2, 2, 1));
    showText(pause * 4,getText(2, 3, 0), getText(2, 3, 1));
    showText(pause * 6,getText(2, 4, 0), getText(2, 4, 1));
    showText(pause * 7,getText(2, 5, 0), getText(2, 5, 1));
    showText(pause * 8,getText(2, 6, 0), getText(2, 6, 1));
    showText(pause * 9,getText(2, 7, 0), getText(2, 7, 1));
    showText(pause * 10,getText(2, 8, 0), getText(2, 8, 1));
    showText(pause * 11,getText(2, 9, 0), getText(2, 9, 1));
    showText(pause * 12,getText(2, 10, 0), getText(2, 10, 1));
    showText(pause * 13,getText(2, 11, 0), getText(2, 11, 1));
    showText(pause * 14,getText(2, 12, 0), getText(2, 12, 1));
    showText(pause * 15,getText(2, 13, 0), getText(2, 13, 1));
    showText(pause * 16,getText(2, 14, 0), getText(2, 14, 1));

    blip();
}
  //Vacations
  if(storyNumber == 3) {
    loadConfig(1);
    showText(pause * 0,getText(3, 0, 0), getText(3, 0, 1));
    showText(pause * 1,getText(3, 1, 0), getText(3, 1, 1));
    showText(pause * 2,getText(3, 2, 0), getText(3, 2, 1));
    showText(pause * 3,getText(3, 3, 0), getText(3, 3, 1));
    showText(pause * 4,getText(3, 4, 0), getText(3, 4, 1));
    showText(pause * 5,getText(3, 5, 0), getText(3, 5, 1));


    blip();

    if(key === '0' || mouseIsPressed === true || touches.length > 0) loadStory(2);
    }
  globalCounter++;

}
