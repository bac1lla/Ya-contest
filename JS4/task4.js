const data = [
    {
        geometry: [10, 20],
        text: 'James'
},
{
    geometry: [20, 40],
        text: 'Bond'
},
{
    geometry: [5, 40],
        text: 'Bond'
}]

const data1 = [
    {
        geometry: [22, 40],
        text: 'Jopa'
    },
    {
        geometry: [21, 40],
        text: 'Bond'
    },
    {
        geometry: [23, 40],
        text: 'Bond'
    }
];
const dictionary = ['James', 'Bond'];



function sortByCoordinates(arr) {

    return arr.sort( (a, b) => a.geometry[0] - b.geometry[0]);
}


function decryptMessage (inputData, inputDictionary) {

    let absentWords = inputData.reduce((newArr, word) => {
        if (inputDictionary.indexOf(word.text) === -1)
            newArr.push(word.text)
        return newArr
    }, [])

    if (absentWords.length) {
        return "Unreadable message"
    }

    //or
    // if ( inputData.reduce((newArr, word) => {
    //     if (inputDictionary.indexOf(word.text) === -1)
    //         newArr.push(word.text)
    //         return newArr
    //     }, []).length ) {
    //
    //     return "Unreadable message"
    //     }

    inputData = sortByCoordinates(inputData);

    const resultMessages = inputData.map( (item) => {
        return item.text;
    }).join(' ');

    inputData.forEach(function(item) {
        item.geometry[0] = Math.log10(Math.sqrt(item.geometry[0] * Math.pow(2, 4)) / 256);
        item.geometry[1] = Math.log10(Math.sqrt(item.geometry[1] * Math.pow(2, 4)) / 256);
    });

    return resultMessages
}

console.log(decryptMessage(data, dictionary))
console.log(decryptMessage(data1, dictionary))



