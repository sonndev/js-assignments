'use strict';

const roll = function(n) {
    return Math.floor(Math.random() * n + 1);
}

let res;
let ones = 0;
let twos = 0;
let threes = 0;
let fours = 0;
let fives = 0;
let sixes = 0;

res = roll(6);
switch (res) {
    case 1:
        ones++;
        break;
    default:
        twos++;    
    case 3:
        threes++;
        break;
    case 4:
        fours++;
        break;
    case 5:
        fives++;
        break;
    case 6:
        sixes++;
        break;   
}


res = roll(6);
switch (res) {
    case 1:
        ones++;
        break;
    default:
        twos++;    
    case 3:
        threes++;
        break;
    case 4:
        fours++;
        break;
    case 5:
        fives++;
        break;
    case 6:
        sixes++;
        break;   
}

res = roll(6);
switch (res) {
    case 1:
        ones++;
        break;
    default:
        twos++;    
    case 3:
        threes++;
        break;
    case 4:
        fours++;
        break;
    case 5:
        fives++;
        break;
    case 6:
        sixes++;
        break;   
}

res = roll(6);
switch (res) {
    case 1:
        ones++;
        break;
    default:
        twos++;    
    case 3:
        threes++;
        break;
    case 4:
        fours++;
        break;
    case 5:
        fives++;
        break;
    case 6:
        sixes++;
        break;   
}

res = roll(6);
switch (res) {
    case 1:
        ones++;
        break;
    default:
        twos++;    
    case 3:
        threes++;
        break;
    case 4:
        fours++;
        break;
    case 5:
        fives++;
        break;
    case 6:
        sixes++;
        break;   
}

res = roll(6);
switch (res) {
    case 1:
        ones++;
        break;
    default:
        twos++;    
    case 3:
        threes++;
        break;
    case 4:
        fours++;
        break;
    case 5:
        fives++;
        break;
    case 6:
        sixes++;
        break;   
}

res = roll(6);
switch (res) {
    case 1:
        ones++;
        break;
    default:
        twos++;    
    case 3:
        threes++;
        break;
    case 4:
        fours++;
        break;
    case 5:
        fives++;
        break;
    case 6:
        sixes++;
        break;   
}

res = roll(6);
switch (res) {
    case 1:
        ones++;
        break;
    default:
        twos++;    
    case 3:
        threes++;
        break;
    case 4:
        fours++;
        break;
    case 5:
        fives++;
        break;
    case 6:
        sixes++;
        break;   
}

res = roll(6);
switch (res) {
    case 1:
        ones++;
        break;
    default:
        twos++;    
    case 3:
        threes++;
        break;
    case 4:
        fours++;
        break;
    case 5:
        fives++;
        break;
    case 6:
        sixes++;
        break;   
}

res = roll(6);
switch (res) {
    case 1:
        ones++;
        break;
    default:
        twos++;    
    case 3:
        threes++;
        break;
    case 4:
        fours++;
        break;
    case 5:
        fives++;
        break;
    case 6:
        sixes++;
        break;   
}



console.log(`ones:\t ${ones}`);
console.log(`twos:\t ${twos}`);
console.log(`threes:\t ${threes}`);
console.log(`fours:\t ${fours}`);
console.log(`fives:\t ${fives}`);
console.log(`sixes:\t ${sixes}`);


/* Konklussion
det samlede antal resultater bliver forskelligt, hvor det ved korrekt udførelse skal være 10 resultater.
*/