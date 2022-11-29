var csv = 'Name,PrevMonthBalance,CurrentMonthBalance,CreditCardBillAmt\n'
    + 'John,100,200,100\n'
    + 'Jane,200,300,100\n'
    + 'Joe,300,400,100\n';
function csvToJson(keys, types, values) {
    return keys.reduce(function (acc, curr, currIndex) {
        var currValue = types[currIndex] === 'number' ? parseInt(values[currIndex], 10) : values[currIndex];
        acc[curr] = currValue;
        return acc;
    }, {});
}
function getMaxFromColumnName(columnName) {
    var data = csv.split("\n");
    var header = data.shift().split(',');
    data.pop();
    var types = ['string', 'number', 'number', 'number'];
    var arrayOfObjects = data.map(function (datum) { return csvToJson(header, types, datum.split(',')); });
    var maxValue = arrayOfObjects.map(function (i) {
        return Object.keys(i) === columnName ? Math.max(i) : "Shraddha";
    });
    return maxValue;
}
function greeter(fn) {
    fn("Hello, World");
}
function printToConsole(s) {
    console.log(s);
}
greeter(printToConsole);
console.log(greeter(printToConsole));
