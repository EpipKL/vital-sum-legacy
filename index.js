// Life Total JavaScript

let lifeTotal = 40;
document.getElementById("life").innerHTML = lifeTotal;

document.getElementById("lifeLoss").addEventListener("click", function(){
    lifeTotal = lifeTotal - 1;
    document.getElementById("life").innerHTML = lifeTotal;
});

document.getElementById("lifeGain").addEventListener("click", function(){
    lifeTotal = lifeTotal + 1;
    document.getElementById("life").innerHTML = lifeTotal;
});

// White Mana JavaScript

let manaWhite = 0;
document.getElementById("whiteValue").innerHTML = manaWhite;
document.getElementById("whiteValueModal").innerHTML = manaWhite;

document.getElementById("whiteValueLoss").addEventListener("click", function(){
    manaWhite = manaWhite - 1;
    document.getElementById("whiteValue").innerHTML = manaWhite;
    document.getElementById("whiteValueModal").innerHTML = manaWhite;    
});

document.getElementById("whiteValueGain").addEventListener("click", function(){
    manaWhite = manaWhite + 1;
    document.getElementById("whiteValue").innerHTML = manaWhite;
    document.getElementById("whiteValueModal").innerHTML = manaWhite;
});

let whiteManaReset = document.getElementById("whiteManaReset");
whiteManaReset.addEventListener("click", function(){
manaWhite = 0;
document.getElementById("whiteValue").innerHTML = manaWhite;
document.getElementById("whiteValueModal").innerHTML = manaWhite;
});

// Blue Mana JavaScript

let manaBlue = 0;
document.getElementById("blueValue").innerHTML = manaBlue;
document.getElementById("blueValueModal").innerHTML = manaBlue;

document.getElementById("blueValueLoss").addEventListener("click", function(){
    manaBlue = manaBlue - 1;
    document.getElementById("blueValue").innerHTML = manaBlue;
    document.getElementById("blueValueModal").innerHTML = manaBlue;
});

document.getElementById("blueValueGain").addEventListener("click", function(){
    manaBlue = manaBlue + 1;
    document.getElementById("blueValue").innerHTML = manaBlue;
    document.getElementById("blueValueModal").innerHTML = manaBlue;    
});

let blueManaReset = document.getElementById("blueManaReset");
blueManaReset.addEventListener("click", function(){
    manaBlue = 0;
    document.getElementById("blueValue").innerHTML = manaBlue;
    document.getElementById("blueValueModal").innerHTML = manaBlue;
});

// Black Mana JavaScript

let manaBlack = 0;
document.getElementById("blackValue").innerHTML = manaBlack;
document.getElementById("blackValueModal").innerHTML = manaBlack;

document.getElementById("blackValueLoss").addEventListener("click", function(){
    manaBlack = manaBlack - 1;
    document.getElementById("blackValue").innerHTML = manaBlack;
    document.getElementById("blackValueModal").innerHTML = manaBlack;
});

document.getElementById("blackValueGain").addEventListener("click", function(){
    manaBlack = manaBlack + 1;
    document.getElementById("blackValue").innerHTML = manaBlack;
    document.getElementById("blackValueModal").innerHTML = manaBlack;
});

let blackManaReset = document.getElementById("blackManaReset");
blackManaReset.addEventListener("click", function(){
    manaBlack = 0;
    document.getElementById("blackValue").innerHTML = manaBlack;
    document.getElementById("blackValueModal").innerHTML = manaBlack;
});

// Red Mana JavaScript

let manaRed = 0;
document.getElementById("redValue").innerHTML = manaRed;
document.getElementById("redValueModal").innerHTML = manaRed;

document.getElementById("redValueLoss").addEventListener("click", function(){
    manaRed = manaRed - 1;
    document.getElementById("redValue").innerHTML = manaRed;
    document.getElementById("redValueModal").innerHTML = manaRed;
});

document.getElementById("redValueGain").addEventListener("click", function(){
    manaRed = manaRed + 1;
    document.getElementById("redValue").innerHTML = manaRed;
    document.getElementById("redValueModal").innerHTML = manaRed;
});

let redManaReset = document.getElementById("redManaReset");
redManaReset.addEventListener("click", function(){
    manaRed = 0;
    document.getElementById("redValue").innerHTML = manaRed;
    document.getElementById("redValueModal").innerHTML = manaRed;
});

// Green Mana JavaScript

let manaGreen = 0;
document.getElementById("greenValue").innerHTML = manaGreen;
document.getElementById("greenValueModal").innerHTML = manaGreen;

document.getElementById("greenValueLoss").addEventListener("click", function(){
    manaGreen = manaGreen - 1;
    document.getElementById("greenValue").innerHTML = manaGreen;
    document.getElementById("greenValueModal").innerHTML = manaGreen;
});

document.getElementById("greenValueGain").addEventListener("click", function(){
    manaGreen = manaGreen + 1;
    document.getElementById("greenValue").innerHTML = manaGreen;
    document.getElementById("greenValueModal").innerHTML = manaGreen;
});

let greenManaReset = document.getElementById("greenManaReset");
greenManaReset.addEventListener("click", function(){
    manaGreen = 0;
    document.getElementById("greenValue").innerHTML = manaGreen;
    document.getElementById("greenValueModal").innerHTML = manaGreen;
});

// Colorless Mana JavaScript

let manaColorless = 0;
document.getElementById("colorlessValue").innerHTML = manaColorless;
document.getElementById("colorlessValueModal").innerHTML = manaColorless;

document.getElementById("colorlessValueLoss").addEventListener("click", function(){
    manaColorless = manaColorless - 1;
    document.getElementById("colorlessValue").innerHTML = manaColorless;
    document.getElementById("colorlessValueModal").innerHTML = manaColorless;
});

document.getElementById("colorlessValueGain").addEventListener("click", function(){
    manaColorless = manaColorless + 1;
    document.getElementById("colorlessValue").innerHTML = manaColorless;
    document.getElementById("colorlessValueModal").innerHTML = manaColorless;
});

let colorlessManaReset = document.getElementById("colorlessManaReset");
colorlessManaReset.addEventListener("click", function(){
    manaColorless = 0;
    document.getElementById("colorlessValue").innerHTML = manaColorless;
    document.getElementById("colorlessValueModal").innerHTML = manaColorless;
});

// Storm Count JavaScript

let stormCount = 0;
document.getElementById("stormCountValue").innerHTML = stormCount;
document.getElementById("stormCountValueModal").innerHTML = stormCount;

document.getElementById("stormCountLoss").addEventListener("click", function(){
    stormCount = stormCount - 1;
    document.getElementById("stormCountValue").innerHTML = stormCount;
    document.getElementById("stormCountValueModal").innerHTML = stormCount;
});

document.getElementById("stormCountGain").addEventListener("click", function(){
    stormCount = stormCount + 1;
    document.getElementById("stormCountValue").innerHTML = stormCount;
    document.getElementById("stormCountValueModal").innerHTML = stormCount;
});

let stormCountReset = document.getElementById("stormCountReset");
stormCountReset.addEventListener("click", function(){
    stormCount = 0;
    document.getElementById("stormCountValue").innerHTML = stormCount;
    document.getElementById("stormCountValueModal").innerHTML = stormCount;
});

// Mana Reset Button JavaScript

let manaResetBtn = document.getElementById("manaResetBtn");
manaResetBtn.addEventListener("click", function(){
    manaWhite = 0;
    document.getElementById("whiteValue").innerHTML = manaWhite;
    document.getElementById("whiteValueModal").innerHTML = manaWhite;

    manaBlue = 0;
    document.getElementById("blueValue").innerHTML = manaBlue;
    document.getElementById("blueValueModal").innerHTML = manaBlue;

    manaBlack = 0;
    document.getElementById("blackValue").innerHTML = manaBlack;
    document.getElementById("blackValueModal").innerHTML = manaBlack;

    manaRed = 0;
    document.getElementById("redValue").innerHTML = manaRed;
    document.getElementById("redValueModal").innerHTML = manaRed;

    manaGreen = 0;
    document.getElementById("greenValue").innerHTML = manaGreen;
    document.getElementById("greenValueModal").innerHTML = manaGreen;

    manaColorless = 0;
    document.getElementById("colorlessValue").innerHTML = manaColorless;
    document.getElementById("colorlessValueModal").innerHTML = manaColorless;

    stormCount = 0;
    document.getElementById("stormCountValue").innerHTML = stormCount;
    document.getElementById("stormCountValueModal").innerHTML = stormCount;

});

// Player Commander Damage

let playerOne = 0;
document.getElementById("playerOneDmg").innerHTML = playerOne;

document.getElementById("playerOneDmgLoss").addEventListener("click", function(){
    playerOne = playerOne - 1;
    document.getElementById("playerOneDmg").innerHTML = playerOne;
});

document.getElementById("playerOneDmgGain").addEventListener("click", function(){
    playerOne = playerOne + 1;
    document.getElementById("playerOneDmg").innerHTML = playerOne;
});

let playerTwo = 0;
document.getElementById("playerTwoDmg").innerHTML = playerTwo;

document.getElementById("playerTwoDmgLoss").addEventListener("click", function(){
    playerTwo = playerTwo - 1;
    document.getElementById("playerTwoDmg").innerHTML = playerTwo;
});

document.getElementById("playerTwoDmgGain").addEventListener("click", function(){
    playerTwo = playerTwo + 1;
    document.getElementById("playerTwoDmg").innerHTML = playerTwo;
});


let playerThree = 0;
document.getElementById("playerThreeDmg").innerHTML = playerThree;

document.getElementById("playerThreeDmgLoss").addEventListener("click", function(){
    playerThree = playerThree - 1;
    document.getElementById("playerThreeDmg").innerHTML = playerThree;
});

document.getElementById("playerThreeDmgGain").addEventListener("click", function(){
    playerThree = playerThree + 1;
    document.getElementById("playerThreeDmg").innerHTML = playerThree;
});

let playerFour = 0;
document.getElementById("playerFourDmg").innerHTML = playerFour;

document.getElementById("playerFourDmgLoss").addEventListener("click", function(){
    playerFour = playerFour - 1;
    document.getElementById("playerFourDmg").innerHTML = playerFour;
});

document.getElementById("playerFourDmgGain").addEventListener("click", function(){
    playerFour = playerFour + 1;
    document.getElementById("playerFourDmg").innerHTML = playerFour;
});

// Adding Player JavaScript

document.getElementById("addPlayer").addEventListener("click", function(){
    console.log("Fuck")
});