// 给定一个会议时间安排的数组，每个会议时间都会包括开始和结束的时间 [[s1,e1],[s2,e2],...] (si < ei)，
// 请你判断一个人是否能够参加这里面的全部会议。

var canAttendMeetings = function (arr) {
  let len = arr.length;
  if(len <= 1) return true;

  let newArr = arr.sort((a,b)=>a[0] - b[0])
  for (let i = 1; i < len; i++) {
    if(newArr[i][0] < newArr[i-1][1]){
      return false;
    }
  }
  return true;
}

console.log(canAttendMeetings([[0,30],[5,10],[15,20]]));
console.log(canAttendMeetings([[7,10],[2,4]]));