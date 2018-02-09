function sortAnagrams(arr) {
    let wordIndexMap = {};
    let sortedWord;
    //Collecting similar anagrams indexes
    for (let i = 0; i < arr.length; ++i) {
        sortedWord = arr[i].split('').sort().join('');
        if (!wordIndexMap[sortedWord]){
            wordIndexMap[sortedWord] = [];
        }
        wordIndexMap[sortedWord].push(i);
    }
    //printing grouped anagrams
    for (let word in wordIndexMap) {
        for (let index of wordIndexMap[word]) {
            console.log(arr[index]);
        }
    }
}
sortAnagrams(['akc', 'kbc', 'kca', 'cbk']);