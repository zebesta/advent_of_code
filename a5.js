var md5 = require('md5');


function main(doorId){
  var i = 0;
  var j = 0;
  var answer = "";
  //regex for 5 zeros
  var re = /^0{5}/;
  while(j<8){
    var string = doorId + i;
    var hashString = md5(string);
    // console.log(hashString);
    if(re.test(hashString)){
      console.log("I found 5 zeros!");
      console.log(hashString);
      answer = answer + hashString[5];
      console.log(answer);
      j++;
    }
    i++;
  }
}

main("cxdnnyjw");
