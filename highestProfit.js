function minMax(arr){
  let lowest = arr[0];
  let highest = arr[0];
  
  for(let i = 0; i < arr.length; i++){
    if(arr[i] < lowest){
      lowest = arr[i];
    }
    if(arr[i] > highest){
      highest = arr[i];
    }
  }
  
  return [lowest,highest]; // fix me!
}
