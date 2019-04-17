/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let numberDiffMapping = {};
    for (let i = 0; i < nums.length; ++i) {
        numberDiffMapping[(target - nums[i])] = i;
    }

    for (let i = 0; i < nums.length; ++i) {
         if (numberDiffMapping[nums[i]]) {
            return [i, numberDiffMapping[nums[i]]];
         }
    }
    return ['NONE'];
};

console.log(twoSum.apply(null, [[2, 7, 11, 15, 7], 14]));