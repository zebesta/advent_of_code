var fs = require('fs');
var valid;

var contents = fs.readFileSync('a3input.txt', 'utf8');
var triangles = contents.split('\n');

function main(){
  valid = 0;
  // console.log(triangles[0]);
  for(var i = 0; i < triangles.length; i++){
    // triangles[i].sort(sortNumber);
    var sides = triangles[i].split(' ');
    for (var j = 0;j<sides.length; j++){
      sides[j] = parseInt(sides[j] + 0);
    }
    sides.sort(sortNumber);
    // console.log(sides);
    if((0 + sides[1] + sides[2]) > 0 +sides[0]){
      valid++;
      console.log("Tri");
      console.log(sides[0] + " " + sides[1] + " " + sides[2]);
    }
  }
  console.log(valid);
}
function sortNumber(a,b) {
    return b - a;
}
main();
