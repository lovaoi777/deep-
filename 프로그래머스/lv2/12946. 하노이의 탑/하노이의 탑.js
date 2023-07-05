


function solution(n) {
    var answer = [];
    function hanoi(n , start , mid, end){
    if(n===1) answer.push([start,end])
        else{
            hanoi(n-1, start , end,mid)
            answer.push([start,end])
            hanoi(n-1, mid , start , end)
        }
}
    hanoi(n,1,2,3)
    return answer;
}
//하노이탑
//1. 한번에 하나의 원판만 옯길  수 있다.
//2. 큰 원판이 작은 원판 위에 있어서는 안된다 . 큰 > 작