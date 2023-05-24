function solution(nums) {
    var answer = [...new Set(nums)];
    var max = nums.length/2;
    console.log(answer,max)
    return answer.length<=max ? answer.length: max ;
}