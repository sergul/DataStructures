var findMedianSortedArrays = function(nums1, nums2) {
	let all = [];
	let maxLength = Math.max(nums1.length, nums2.length);
	for (let i = 0; i < maxLength; ++i) {
			all[nums1[i]] = nums1[i];
			all[nums2[i]] = nums2[i];
	}
	return all[all.length / 2]
};

console.log(findMedianSortedArrays([1, 3, 5], [2]));