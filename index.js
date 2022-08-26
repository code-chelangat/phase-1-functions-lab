
// returns the number of blocks given a value
function distanceFromHqInBlocks(distance) {
  return Math.abs(distance - 42);
}
  // if (distance > 42){
  //   return (distance - 42);
  // }
  // else{
  // return (42 - distance);
  //}

function distanceFromHqInFeet(distance){
  return distanceFromHqInBlocks(distance) * 264;
}

function distanceTravelledInFeet(start , end){
  return Math.abs(end - start) * 264;
}

function calculatesFarePrice(start, destination){
  const totalDistance = distanceTravelledInFeet(start, destination);
  if (totalDistance < 400) {
    return 0;
  }
  else if (totalDistance > 400 && totalDistance < 2000){
    return (totalDistance -400) * 0.02;
  }
   else if (totalDistance > 2000 && totalDistance < 2500){
    return 25;
  }
  else if (totalDistance > 2500){
    return 'cannot travel that far';
  }

}