var inputString = "not-a-real-room-404[oarel]";

function main(s){
  var strings = s.split('[');
  var alpha = strings[0];
  //remove numbers
  alpha = alpha.replace(/[0-9]/g, '');
  //remove dashes
  alpha = alpha.replace(/-/g, '');
  console.log(alpha);
  var sector = strings[0];
  //remove non numbers
  sector = sector.replace(/[^0-9]/g, '');
  console.log(sector);
  var key = strings[1];
  key = key.replace(/]/g, '');
  console.log(key);
  var counter = [];
  var letters = alpha.split('');
  for(var i = 0; i<letters.length; i++){
    var l = letters[i];
    if(counter[l]){
      counter[l] = counter[l] + 1;
    }else{
      counter[l] = 1;
    }
  }
  console.log(counter);
  console.log("sorting");
  console.log(Object.keys(counter));
  counter.sort(function(a, b) {
    if(Object.keys(a)[0] > Object.keys(b)[0]){
      return -1;
    }
    else if(Object.keys(a)[0] < Object.keys(b)[0]){
      return 1;
    }
    else{
      return 0;
    }
  });
  console.log(counter);
}
// function compare(a, b) {
//   console.log("comparing!");
//   if (a.values()[0]-b.values()[0]>0) {
//     return -1;
//   }
//   if (a.values()[0]-b.values()[0]<0) {
//     return 1;
//   }
//   // a must be equal to b
//   return 0;
// }

main(inputString);
