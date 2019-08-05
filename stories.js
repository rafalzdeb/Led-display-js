function loadStory(story) {
  let stories = [];

  let min, h;
  if (minute() < 10) {
    min = "0" + minute();}
    else { min = minute()
    }
  if (hour() < 10) {
    h = "0" + hour();}
    else { h = hour()
    }

  stories[0] = "user$";
  stories[1] = "user$";
  stories[2] = "user$";
  stories[3] = "                 Departures                " +
               "Destination                           Times" +
               "                                           " +
               "Bahamas                               "+ h + ":" + min+"" +
               "Paris                               delayed" +
               "Mallorca                              "+ h + ":" + 40 +"" +
               "Los Angeles                           "+ "00:" + min +" ";
  storyNumber = story;
  localCounter = 0;
  sentence = stories[story].toLowerCase().split('');
  //return stories[story];
}


function showText(pause, text, text_pos) {
  if(localCounter > pause){
    sentence[bliper] = ' ';
    bliper = text_pos + text.length;
    for(let i = 0; i < text.length; i++){
      sentence[text_pos + i] = text[i];
    }
  }
}

function blip() {
  if (localCounter % 2 != 0) {
    sentence[bliper] = '|';
    localCounter++;
  }
  else {
    sentence[bliper] = ' ';
    localCounter++;
  }
}

function getText(story, no, pos) {
  let texts = [];

  texts = [
           [
            ['main menu:', 6],
            ['1. your vacation plans', 6 + 43],
            ['2. looking for a programmer?', 6 + 43 * 2],
            ['3. display config', 6 + 43 * 3],
            ['choose an option...', 6 + 43 * 5]
           ],
           [
            ['configuration:', 6],
            ['1. amber', 6 + 43],
            ['2. monochrome', 6 + 43 * 2],
            ['3. matrix', 6 + 43 * 3],
            ['0. main menu', 6 + 43 * 5],
            ['choose an option...', 6 + 43 * 6]
           ],
           [
            ['looking for a programmer?', 6],
            ['i might have someone for you', 6 + 43],
            ['he is not exactly neo, you know...', 6 + 43 * 2],
            ['but he is getting there', 6 + 43 * 3],
            ['worked 20 years as an analyst', 6 + 43 * 4],
            ['and now he wants to code', 6 + 43 * 5],
            ['he knows java, python & sql', 6 + 43 * 7],
            ['has no previous coding job experience', 6 + 43 * 8],
            ['but wants to learn a lot', 6 + 43 * 9],
            ['right now he gets familiar with',6 + 43 *10],
            ['design patterns, spring & junit', 6 + 43 * 11],
            ['he coded this page from scratch', 6 + 43 * 13],
            ['do you like what you see?', 6 + 43 * 14],
            ['contact him @', 6 + 43 * 16],
            ['rafal.zdeb@gmail.com', 6 + 43 * 17]
           ],
           [
             ['that looks nice, isn\'t it?' , 5 + 43 * 8],
             ['all the places you could go', 5 + 43 * 9],
             ['if only you hired a right programmer!', 5 + 43 * 10],
             ['press 0 or touch the screen', 5 + 43 * 12],
             ['to go to the next page', 5 + 43 * 13],
             ['', 5 + 43 * 14]
           ]
          ]

  return texts[story][no][pos];
}
