var number = function(busStops){
  let passengers = 0
  let sum = 0
  
  for(let i = 0; i < busStops.length; i++){ 
    console.log(busStops[i][0])
    console.log(busStops[i][1])
    sum = busStops[i][0] - busStops[i][1]
    passengers += sum
  }
  return passengers
}
