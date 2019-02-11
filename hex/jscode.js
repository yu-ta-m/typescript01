var numA = 0xAF;
var numB = 0x3B;
var resultStr;
var numAname = "numA :";
var numBname = "numB :";
var add = "加算:";
var sub = "減算:";
var br = "<br>";
resultStr = numAname + numA + br
    + numBname + numB + br
    + add + (numA + numB) + br
    + sub + (numA - numB);
document.body.innerHTML = resultStr;
