/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
 var merge = function(intervals) {
  intervals.sort((a,b) => a[0] - b[0])

  for(let i = 0; !!intervals[i + 1] === true; i++) {
    if(intervals[i + 1][0] <= intervals[i][1]) {
      intervals[i] = [intervals[i][0], Math.max(intervals[i][1], intervals[i+1][1])]
      intervals.splice(i+1, 1)
      i--
    }
  }

  return intervals
};

console.log(merge([[1,3],[2,6],[8,10],[15,18]]));
console.log(merge([[1,4],[4,5]]));
console.log(merge([[1,4],[0,4]]));