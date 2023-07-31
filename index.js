// Code your solution in this file!
let hq = 42;
function distanceFromHqInBlocks(street) {
    let blocksFromHq;
    if (street > hq) {
        blocksFromHq = street - hq;
    } else if (street < hq) {
        blocksFromHq = hq - street;
    }

    return blocksFromHq;
}

function distanceFromHqInFeet(blocks) {
    let feet = distanceFromHqInBlocks(blocks);

    return feet * 264;
}

function distanceTravelledInFeet(start, end) {
    let difference;
    if (start > end) {
        difference = start - end;
    } else if (end > start) {
        difference = end - start;
    }

    return difference * 264;
}

function calculatesFarePrice(start, end) {
    let difference;
    let fare = 0;
    if (start > end) {
        difference = start - end;
    } else if (end > start) {
        difference = end - start;
    }
    
    let differenceInFeet = difference * 264;

    if (differenceInFeet < 400) {
        return fare;
    } else if (differenceInFeet > 400 && differenceInFeet < 2000) {
        differenceInFeet -= 400;
        fare = differenceInFeet * 0.02;
        return fare;
    } else if (differenceInFeet >= 2000 && differenceInFeet < 2500) {
        
        fare = 25;
        return fare;
    } else if (differenceInFeet > 2500) {
        return 'cannot travel that far';
    }
    
}