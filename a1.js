var inputString = "L5, R1, R3, L4, R3, R1, L3, L2, R3, L5, L1, L2, R5, L1, R5, R1, L4, R1, R3, L4, L1, R2, R5, R3, R1, R1, L1, R1, L1, L2, L1, R2, L5, L188, L4, R1, R4, L3, R47, R1, L1, R77, R5, L2, R1, L2, R4, L5, L1, R3, R187, L4, L3, L3, R2, L3, L5, L4, L4, R1, R5, L4, L3, L3, L3, L2, L5, R1, L2, R5, L3, L4, R4, L5, R3, R4, L2, L1, L4, R1, L3, R1, R3, L2, R1, R4, R5, L3, R5, R3, L3, R4, L2, L5, L1, L1, R3, R1, L4, R3, R3, L2, R5, R4, R1, R3, L4, R3, R3, L2, L4, L5, R1, L4, L5, R4, L2, L1, L3, L3, L5, R3, L4, L3, R5, R4, R2, L4, R2, R3, L3, R4, L1, L3, R2, R1, R5, L4, L5, L5, R4, L5, L2, L4, R4, R4, R1, L3, L2, L4, R3";

parseInput(inputString);

var x;
var y;
var direction; //0 = North, 1 = east, 2 = south, 3 = west



function parseInput(inputString){
  var inputArray = inputString.split(', ');
  direction = 0;
  x = 0;
  y = 0;
  for(let i of inputArray){
    var dir = i;
    var distance = i;
    var dir = dir.replace(/[0-9]/g, '');
    var distance = distance.replace(/[^0-9]/g, '');
    turn(dir);
    travel(distance);
  }
  var totalDistance = Math.abs(parseInt(x)) + Math.abs(parseInt(y));
  console.log(totalDistance);
}
//determines new direction
function turn(d) {
  //turn right
  if(d == 'R'){
    direction++;
    //complete turn, face north
    console.log("turning right");
    if(direction == 4){
      direction = 0;
    }
  }
  //turn left
  if(d == 'L'){
    direction--;
    console.log("Turning left")
    //complete turn, face west
    if(direction == -1){
      direction = 3;
    }
  }
}

//travels given distance in the right direction
function travel(distance){
  console.log("Direction in travel is " + direction);
  switch(direction){
    case 0:
      y += parseInt(distance);
      break;
    case 1:
      x += parseInt(distance);
      break;
    case 2:
      y -= parseInt(distance);
      break;
    case 3:
      x -= parseInt(distance);
      break;
    default:
      console.log("direction is fucked!");
  }
  return;
}
