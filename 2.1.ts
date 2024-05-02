{
// ! type assertion

// let anything: any;

// anything = "Next Level Web Development";

// anything = 222;

// (anything as number)


const kgToGram = (value: string | number): string | number | undefined => {
    if(typeof value === "string"){
        const convertedValue = parseFloat(value)*1000
        return `The converted value is ${convertedValue}`;
    }
    if(typeof value === "number"){
        return value * 1000
    }
}

const result1 = kgToGram(500) as number;
const result2 = kgToGram("5000") as string;

type customError = {
    message: string
}

try {
    
} catch (error) {
    console.log((error as customError).message);
}


}