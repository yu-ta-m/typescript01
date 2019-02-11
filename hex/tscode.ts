let numA = 0xAF;
let numB = 0x3B;

let resultStr:string;

const numAname = "numA :";
const numBname = "numB :";

const add = "加算:";
const sub = "減算:";

const br = "<br>";

resultStr = numAname+numA+br
            +numBname+numB+br
            +add + (numA+numB)+br
            +sub + (numA-numB);

document.body.innerHTML = resultStr;