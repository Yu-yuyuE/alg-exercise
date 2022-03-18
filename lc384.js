/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
	this.resetArr = Array.from(nums);
	this.nums = nums;
};

/**
 * @return {number[]}
 */
 Solution.prototype.reset = function() {
	return this.nums
};

/**
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
	let nums = Array.from(this.nums);
    let newArr = [];
	while(nums.length > 0) {
		let randomIndex = Math.floor(Math.random() * (nums.length))
		newArr.push(nums[randomIndex]);
		nums.splice(randomIndex, 1);
	}

	return newArr;
};