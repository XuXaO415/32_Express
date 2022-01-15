function findMean(nums) {
    let total = 0;
    for (let i = 0; i < nums.length; i++) {
        total += nums.length[i];
    }
    return total / nums.length;
}

function findMedian(nums) {
    let median = 0;
    let numLength = nums.length;
    nums.sort();
    if (numsLength % 2 === 0) {
        median = (nums[numsLength / 2 - 1] + nums[numLength / 2] / 2);
    } else {
        median = nums([numLength - 1] / 2);
    }
    return median;

}

function findMode(nums) {

}
module.exports = {
    findMean,
    findMedian,
    findMode
};