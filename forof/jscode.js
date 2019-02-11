var rates;
rates = [120, 133, 150, 166, 200];
var resultStr = "種類は";
rates.push(233);
for (var _i = 0, rates_1 = rates; _i < rates_1.length; _i++) {
    var rate = rates_1[_i];
    resultStr += rate + "MHz, ";
}
var newStr = resultStr.substr(0, resultStr.length - 2);
document.body.innerHTML = newStr + "です.";
