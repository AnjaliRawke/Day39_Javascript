let arr = [];

for(let i = 0; i <= 100; i++){
  let str = i.toString();
  
  if(str.length == 2 && str[0] == str[1]){
    arr.push(i);
  }
}

console.log(arr);
