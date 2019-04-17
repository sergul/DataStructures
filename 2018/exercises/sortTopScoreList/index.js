function myFunction(arg) {
    let unsortedScors = arg;
    let collectedValuesHashTable = {};
    let sortedScores = [];
    unsortedScors.forEach(element => {
        if (!collectedValuesHashTable[element]) {
            collectedValuesHashTable[element] = [element];
            sortedScores[element] = collectedValuesHashTable[element];
        } else {
            collectedValuesHashTable[element].push(element);
        }
    });
    sortedScores = sortedScores.filter((item) => {
        return item !== undefined;
    });
    sortedScores = sortedScores.reduce((prev, current) => {
        return prev.concat(current);
    });
    return sortedScores;
}
//This solution uses O(n) time and O(n) memory 

//The whole idea here is to collect all the identical values into subarrays like so: [[37, 37, ... 37], [41], ... [100]]
//And then just move reasign them in "sortedScores" array by there indexes
//Then filter the undefined values and concat the sorted subarrays into one array
console.log(myFunction([37, 89, 37, 37, 37, 53, 41, 65, 91, 43, 53, 91, 100], 100));