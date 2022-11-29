const csv =
    'Name,PrevMonthBalance,CurrentMonthBalance,CreditCardBillAmt\n'
    + 'John,100,200,100\n'
    + 'Jane,200,300,100\n'
    + 'Joe,300,400,100\n';

function csvToJson(keys: string[], types: string[], values: string[]) {
    return keys.reduce(
        (acc: any, curr: any, currIndex) => {
            const currValue = types[currIndex] === 'number' ? parseInt(values[currIndex], 10) : values[currIndex]
            acc[curr] = currValue;
            return acc;
        }, {});
}

function getMaxFromColumnName(columnName: any): any {
    const data = csv.split(`\n`);
    const header = data.shift()!.split(',');
    data.pop();
    const types = ['string', 'number', 'number', 'number'];

    const arrayOfObjects = data.map((datum) => csvToJson(header, types, datum.split(',')));

    const maxValue = arrayOfObjects.map((i) => {
        return Object.keys(i) === columnName ? Math.max(i) : "Shraddha"

    })

    return maxValue;
}

type c = (a: string) => void;
function greeter(fn: c) {
    fn("Hello, World");
}

function printToConsole(s: string) {
    console.log(s);
}

greeter(printToConsole);


console.log(greeter(printToConsole));