function betterThanAverage(classPoints, yourPoints) {
  let totalPoints = yourPoints;
  for(let i = 0; i < classPoints.length; i++){
      totalPoints += classPoints[i];
  }
  if(totalPoints / classPoints.length > yourPoints){
    return false
  }
  return true;
}
