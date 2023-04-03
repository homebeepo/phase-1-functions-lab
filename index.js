// Code your solution in this file!
function distanceFromHqInBlocks(pickup) {
    return Math.abs(42 - pickup)
}
function distanceFromHqInFeet(pickup) {
    return distanceFromHqInBlocks(pickup) * 264
}

function distanceTravelledInFeet(start, end) {
    return 264*Math.abs(start - end)
}

function calculatesFarePrice(start, destination) {
    let d = distanceTravelledInFeet(start, destination)
    if (d <= 400) {return 0}
    else if (d <= 2000) {return (d-400)*0.02}
    else if (d <= 2500) {return 25}
    else {return 'cannot travel that far'}
}