function createFrequencyCounter(arr) {
    return arr.reduce(function(acc, next) {
        acc[next] = (acc[next] || 0) + 1;
        return acc;
    }, {});
}

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

// function findMode(arr) {
//     let count = [];
//     let freqCount = 0;
//     let mode = [];
//     for (let i in arr) {
//         count[arr[i]] = (count[arr[i] || 0]) + 1;
//         if (count[arr[i]] > freqCount) {
//             freqCount = count[arr[i]];
//         }
//     }
//     for (let j in count) {
//         if (count[j] === freqCount) {
//             mode.push(j);
//         }
//     }
//     return mode;
// }

function findMode(arr) {
    let freqCounter = createFrequencyCounter(arr);
    let count = 0;
    let mostFrequent;

    for (let key in freqCounter) {
        if (freqCounter[key] > count) {
            mostFrequent = key;
            count = freqCounter[key];
        }
    }
    return +mostFrequent;
}


module.exports = {
    findMean,
    findMedian,
    findMode
};