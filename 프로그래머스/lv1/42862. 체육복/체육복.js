
function solution(n, lost, reserve) {
    let answer =  n - lost.length;
    let tmep = [];
    
    //lost, reserve 같이 있는 학생
    for (let i = 0; i < lost.length ; i ++) {
        if (reserve.includes(lost[i])) {
            reserve = reserve.filter((e) => e !== lost[i])
            answer += 1;
        } else {
            tmep.push(lost[i]);
        }
    }
    // 정렬
    lost = tmep.sort();
    for (let i = 0 ; i < lost.length ; i ++) {
        if (reserve.includes(lost[i] - 1 )) {
            answer += 1 ;
            reserve = reserve.filter ((e) => e !== lost[i] - 1 )
        }
        else if (reserve.includes(lost[i] + 1)) {
            answer += 1;
            reserve = reserve.filter((e) => e !== lost[i] + 1
           )
        }
    }
    return answer;
}