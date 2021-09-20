// Code your solution in this file!

function distanceFromHqInBlocks(blockNumber){
    let address = 42;
    let blocks= Math.abs(blockNumber - address);
    return blocks;
    // if(address > blockNumber){
    //     let blocks = blockNumber-address;
    // }else if(address < blockNumber){
    //     let blocks =blockNumber-address;
    // }
    // return blocks;
}
distanceFromHqInBlocks(43);
distanceFromHqInBlocks(50);
distanceFromHqInBlocks(34);

function distanceFromHqInFeet(blockNumber){
    let address = 42;
    let blockFeet = 264;
    let blocks = Math.abs(blockNumber-address);
    return blocks*blockFeet;
}

distanceFromHqInFeet(43);
distanceFromHqInFeet(34);
distanceFromHqInFeet(50);


function distanceTravelledInFeet(blockNumber, destination){
    let blockFeet =264;
    let numBlocks = Math.abs(blockNumber-destination);
    let totalFeet = numBlocks * blockFeet;
    return totalFeet;
}


function calculatesFarePrice(start, destination){
    let blockFeet =264;
    let numBlocks = Math.abs(start-destination);
    let totalFeet = numBlocks * blockFeet;

    if (totalFeet > 400 && totalFeet < 2000){
        let fare = .02;
        let farePrice = (totalFeet-400)* fare;
        return farePrice;

    }else if(totalFeet > 2000 && totalFeet <2500){
        let farePrice = 25;
        return farePrice;
    
    }else if(totalFeet < 400){
        let farePrice = 0;
        return farePrice;
    }else{
        return 'cannot travel that far';
    }
    //return farePrice;
}
//console.log(calculatesFarePrice(43,44));