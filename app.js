const express = require('express');
const  ExpressError = require("./ExpressError")
const app = express();
const {findMean, findMedian, findMode, convertAndValidateNumsArray} = require("./helpers");


app.get("/mean", (req, res, next) => {
  if (!req.query.nums) {
    throw new ExpressError ("You must enter a number.", 400)
  }
  let numsAsStrings = req.query.nums.split(',');
  // check if anything bad was put in
  let nums = convertAndValidateNumsArray(numsAsStrings);
  if (nums instanceof Error) {
    throw new ExpressError(nums.message);
  }

  let result = {
    operation: "mean",
    result: findMean(nums)
  }

  return res.send(result);
})

app.get("/median", (req, res, next) => {
  if (!req.query.nums) {
    throw new ExpressError ("You must enter a number.", 400)
  }
  let numsAsStrings = req.query.nums.split(',');
  // check if anything bad was put in
  let nums = convertAndValidateNumsArray(numsAsStrings);
  if (nums instanceof Error) {
    throw new ExpressError(nums.message);
  }
  
   let result = {
    operation: "median",
    result: findMedian(nums)
   }

   return res.send(result);
})

app.get("/mode", (req, res, next) => {
  if (!req.query.nums) {
    throw new ExpressError ("You must enter a number.", 400)
  }
  let numsAsStrings = req.query.nums.split(',');
  // check if anything bad was put in
  let nums = convertAndValidateNumsArray(numsAsStrings);
  if (nums instanceof Error) {
    throw new ExpressError(nums.message);
  }
  
   let result = {
    operation: "mode",
    result: findMode(nums)
   }

   return res.send(result);
})



// 404 handler
app.use(function (req, res, next) {
  const notFoundError = new ExpressError("Not Found", 404);
  return next(notFoundError)
});

// generic error handler
app.use(function(err, req, res, next) {
  // the default status is 500 Internal Server Error
  let status = err.status || 500;
  let message = err.message;

  // set the status and alert the user
  return res.status(status).json({
    error: {message, status}
  });
});

app.listen(3000, function () {
  console.log('App on port 3000');
})
