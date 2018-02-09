var twoSum = function(nums, target) {
    for (let i = 0; i <= nums.length / 2; i+=2) {
        if (nums[i] + nums[i + 1] === target) {
            return [i, i+ 1];
        }
    }
    return ['NONE'];
};

console.log(twoSum.call(this, [2, 7, 11, 15], 24));