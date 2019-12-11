"use strict";

var Tiles = {
  Wall: "tile-wall",
  Space: "tile-space",
  Goal: "tile-goal"
};

/*   Enum of CSS Classes for the moving elements   */
var Entities = {
  Character: "entity-player",
  Block: "entity-block",
  BlockDone: "entity-block-goal"
};

var tileMap01 = {
  width: 19,
  height: 16,
  mapGrid: [
    [[' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' ']],
    [[' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' ']],
    [[' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' ']],
    [[' '], [' '], [' '], [' '], ['W'], ['W'], ['W'], ['W'], ['W'], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' ']],
    [[' '], [' '], [' '], [' '], ['W'], [' '], [' '], [' '], ['W'], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' ']],
    [[' '], [' '], [' '], [' '], ['W'], ['B'], [' '], [' '], ['W'], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' ']],
    [[' '], [' '], ['W'], ['W'], ['W'], [' '], [' '], ['B'], ['W'], ['W'], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' ']],
    [[' '], [' '], ['W'], [' '], [' '], ['B'], [' '], ['B'], [' '], ['W'], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' ']],
    [['W'], ['W'], ['W'], [' '], ['W'], [' '], ['W'], ['W'], [' '], ['W'], [' '], [' '], [' '], ['W'], ['W'], ['W'], ['W'], ['W'], ['W']],
    [['W'], [' '], [' '], [' '], ['W'], [' '], ['W'], ['W'], [' '], ['W'], ['W'], ['W'], ['W'], ['W'], [' '], [' '], ['G'], ['G'], ['W']],
    [['W'], [' '], ['B'], [' '], [' '], ['B'], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], ['G'], ['G'], ['W']],
    [['W'], ['W'], ['W'], ['W'], ['W'], [' '], ['W'], ['W'], ['W'], [' '], ['W'], ['P'], ['W'], ['W'], [' '], [' '], ['G'], ['G'], ['W']],
    [[' '], [' '], [' '], [' '], ['W'], [' '], [' '], [' '], [' '], [' '], ['W'], ['W'], ['W'], ['W'], ['W'], ['W'], ['W'], ['W'], ['W']],
    [[' '], [' '], [' '], [' '], ['W'], ['W'], ['W'], ['W'], ['W'], ['W'], ['W'], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' ']],
    [[' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' ']],
    [[' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' ']]
  ]
};

var myDiv = document.getElementById("myDiv");

myDiv.innerHTML = "";

var myBody = document.getElementsByTagName("body")[0];

myBody.style.backgroundColor = "lightgray";

console.log(myDiv);

myDiv.style.width = (tileMap01.width * 50) + "px";
myDiv.style.height = (tileMap01.height * 50) + "px";

var player_Y = -1;
var player_X = -1;

for (let y = 0; y < tileMap01.height; y++) {
  for (let x = 0; x < tileMap01.width; x++) {
    const element = document.createElement("div");
    element.classList.add("box");

    console.log(tileMap01.mapGrid[y][x]);

    if (tileMap01.mapGrid[y][x] == " ") {
      element.classList.add("space");

    } else if (tileMap01.mapGrid[y][x] == "W") {
      element.classList.add("wall");

    } else if (tileMap01.mapGrid[y][x] == "G") {
      element.classList.add("goal");

    } else if (tileMap01.mapGrid[y][x] == "B") {
      element.classList.add("create");

    } else if (tileMap01.mapGrid[y][x] == "P") {
      element.classList.add("player");
      player_Y = y;
      player_X = x;
    }

    element.id = "x" + x + "y" + y;

    myDiv.appendChild(element);
  }
}

function playerMove(y_offset, x_offset) {


}

function KeyDown(wichkey)
{
    if (wichkey == 37) move(-1.0);
    if (wichkey == 38) move(0.-1);
    if (wichkey == 39) move(1.0);
    if (wichkey == 40) move(0.1);
    
}

function Init(ll)
{
  var cc, ii,jj,kk;
  for(ii = 0; ii < Xmax; ii++)
  {
    for (jj=0; jj <Ymax; jj++)
    Fid[ii] [jj]=0;

  }
  /*  Legend
    W = Wall
    B = Movable block
    P = Player starting position
    G = Goal area for the blocks
*/
  ii=0 jj=0;
  for (kk=0; kk<scrn[ll].length; kk++)
  {
    cc= scrn[ll].charArt(kk);
    if (cc=="G") Fid[ii][jj]=1
    if (cc=="W") Fid[ii][jj]=2
    if (cc=="B") Fid[ii][jj]=3
    if (cc=="") Fid[ii][jj]=4

    if (cc=="P") { Fid[ii][jj]=5; PosX=ii; PosY=jj;}
    if ((cc=="") && (cc" " ) && Fid[ii][jj]==0)) alert (cc);
    if (cc=="") { jj++; ii=0; }
    else ii++;
    


    
  }
}