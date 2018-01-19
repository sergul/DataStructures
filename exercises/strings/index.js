function firstDuplicateValue(a) {
    let valueIndexMap = {};
    for (let i = 0; i < a.length; ++i) {
        if(!valueIndexMap[a[i]]) {
            valueIndexMap[a[i]] = [];
        } else {
            return a[i];
        }
    }
    return -1;
}

//firstDuplicate([2, 1, 2, 1, 2, 2]);

function firstDistinctValue(str) {
    let valueIndexMap = {};
    for (let char of str) {
        if(!valueIndexMap[char]) {
            valueIndexMap[char] = [];
        }
        valueIndexMap[char] ++;
    }

    for (let item in valueIndexMap) {
        let length = valueIndexMap[item];
        if (length === 1) {
            return item;
        }
    }
    return '_';
}

//firstDistinct('abacabad');

function getDifferenceOf(a1, a2) {
    Array.prototype.sum = function() {return this.reduce((accumulator, currentValue) => accumulator + currentValue);}
    return Math.abs(a1.sum() - a2.sum());
}

let diff = getDifferenceOf([3, 6, 4, 8], [4, 8, 3]);




