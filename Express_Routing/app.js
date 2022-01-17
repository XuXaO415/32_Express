const express = require('express');
const app = express();
const ExpressError = require('./expressError');

const { createFrequencyCounter, findMean, findMedian, findMode, convertAndValidateNumsArray } = require('./helpers')

app.get('/mean', function(req, res, next) {
    try {
        const nums = req.query;
        if (!req.query) throw new ExpressError('nums are required', 400);
        let num = req.query.nums.split(',');
        if (num.is instanceof Error) throw new ExpressError(`${res.query} is not a number`, 400);

        return res.json({
            response: {
                operation: "mean",
                value: findMean(num)
            }

        });
    } catch (err) {
        return next(err);
    }

})

// app.get('/mean', function(req, res, next) {
//     try {
//         const nums = req.query;
//         if (!req.query.nums) {
//             throw new ExpressError('nums are required', 400);
//         }
//         let notANum = req.query.nums.split(',');
//         if (notANum.includes(NaN)) throw new ExpressError(` Your query ${notANum}: is not a number`, 400);
//         let total = 0;
//         for (let i = 0; i < notANum.length; i++) {
//             total += notANum[i];
//         }
//         total = total / notANum.length;
//         res.json({
//             response: {
//                 operation: "mean",
//                 value: total
//             }
//         })
//     } catch (err) {
//         next(err)
//     }
// })



app.get("/median", function(req, res, next) {
    if (!req.query.nums) {
        throw new ExpressError(`${res.query} is not a number`, 400);
    }
    let numsAsStrings = req.query.nums.split(",");
    let nums = convertAndValidateNumsArray(numsAsStrings);
    if (nums instanceof Error) {
        throw new ExpressError(nums.message);
    }

    let result = {
        operation: "median",
        result: findMedian(nums)
    };

    return res.send(result);
});

app.get('/mode', function(req, res, next) {
    if (!req.query.nums) {
        throw new ExpressError(`${res.query} is not a number`, 400)
    }
    let numsAsStrings = req.query.nums.split(',');
    let nums = convertAndValidateNumsArray(numsAsStrings);
    if (nums instanceof Error) {
        throw new ExpressError(nums.message);
    }
    return res.json({
        response: {
            operation: "mode",
            value: findMode(nums)
        }
    })

})





app.listen(3000, function() {
    console.log('App on port 3000');
});