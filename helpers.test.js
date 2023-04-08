const { findMean, findMedian, findMode} = require("./helpers");

describe ("#findMean", function(){
    test("finds the mean of set of numbers", function(){
        expect(findMedian([1,2,3,4])).toEqual(2.5);
    })
    test("finds the mean of set with negative number", function(){
        expect(findMean([-1,2,3,4])).toEqual(2);
    })
})

describe("#findMedian", function(){
    test("finds median of a set of numbers", function(){
        expect(findMedian([1,2,3,4])).toEqual(2.5);
    })
    test("finds median of a set with negative number", function(){
        expect(findMedian([-1,2,3,4])).toEqual(2.5);
    })
})

describe("#findMode", function(){
    test("finds mode of a set of numbers", function(){
        expect(findMedian([1,2,2,3,4])).toEqual(2);
    })
})


