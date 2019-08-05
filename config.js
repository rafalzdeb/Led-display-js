function loadConfig(mode) {
  size = 3;
  margin = 13;
  myWidth = int((width - 2 * margin) / (size * 6));
  myHeight = int((height -2 * margin) / (size * 10));
  pause = 1;

  if (mode == 3) {
    colorOn = color('#00FF41');
    colorOff = color('#003B00');
  }
  if (mode == 1) {
    colorOn = color(185,128,0);
    colorOff = color(40);
  }
  if (mode == 2) {
    colorOn = color(250,250,250);
    colorOff = color(40);
  }

}
