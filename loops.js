//loop through the rainbo and print out the colors to the page

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];
const ew = ['black', 'gray', 'red'];

const printToDOM = (toPrint, divId) => {
    document.getElementById(divId).innerHTML += toPrint;
}

const printRainbow = (colorArr) => {
    for (let i = 0; i < colorArr.length; i++) {
        const color = colorArr[i];
        printToDOM(color, 'rainbow');
    }
}

printRainbow(colors);
printRainbow(ew);

// go through and print them out. All should print to the DOM as: <p>firstName lastName</p>

const instructors = [
    {first: "Zoe", last: "Ames"},
    {first: "Callan", last: "Morrison"},
    {first: "Greg", last: "Korte"},
    {first: "Michael", last: "Clarke"},
  ];

const printNames = (namesArray) => {
    for (let i = 0; i < namesArray.length; i++) {
        const person = namesArray[i];
        const element = `<p>${person.first} ${person.last}</p>`
        printToDOM(element, 'people');
    }
}

printNames(instructors)