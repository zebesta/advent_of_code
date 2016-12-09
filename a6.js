var fs = require('fs');
var valid;

var contents = fs.readFileSync('teaxta6.txt', 'utf8');
var lines = contents.split('\n');
var columns = [];
var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
var message = "";

//build string of columns
for(var i = 0; i<lines[0].length; i++){
  columns[i] = "";
  for(var j = 0; j<lines.length; j++){
    columns[i] += lines[j][i];
  }
}

for(var i = 0; i < columns.length; i++){
  var max = 0;
  var maxChar;
  for(var j = 0; j < alphabet.length; j++){
    var regexp = new RegExp(alphabet[j], 'gi')
    var reg = columns[i].match(regexp);
    if(reg){
      count = reg.length;
      if(count > max){
        max = count;
        maxChar = alphabet[j];
      }
    }

  }
  message+= maxChar;
}
console.log(message);
