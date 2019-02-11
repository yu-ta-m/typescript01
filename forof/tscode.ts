let rates:number[];
rates = [120, 133, 150, 166, 200];

let resultStr = "種類は";
rates.push(233);

for(let rate of rates){
    resultStr+= rate + "MHz, ";
}

let newStr = resultStr.substr(0, resultStr.length-2);
document.body.innerHTML = newStr+"です.";

