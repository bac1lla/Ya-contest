const explorers = [
    ["Mallory", "Everest", "Mont Blanc", "Pillar Rock"],
    ["Mawson", "South Pole", "New Hebrides"],
    ["Hillary", "Everest", "South Pole"]
]


// expected output
// [
//  ["Everest", "Hillary", "Mallory"],
//  ["South Pole", "Hillary", "Mawson"],
//  ["Mont Blanc", "Mallory"],
//  ["Pillar Rock", "Mallory"],
//  ["New Hebrides", "Mawson"]
// ]

//также есть функция flat()
const flatConcat = arr => [].concat(...arr)

function findToponyms(toponym) {
    //разверачиваем массив и удаляем исследователей
    toponym = flatConcat(explorers.map( (string) => {
        return string.filter((item, index) => index !== 0)
    }))


// удаляем дубликаты и обораичваем топонимы в массивы
    toponym = toponym.filter( (toponym, index, array) => {
        return array.indexOf(toponym) === index
    }).map(toponym => [toponym]);


    toponym.forEach((top) => {

        explorers.map(string => {
            if (string.includes(top[0])) {
                top.push(string[0]);
            }
        })
    })

    return toponym
}

console.log(findToponyms(explorers))





