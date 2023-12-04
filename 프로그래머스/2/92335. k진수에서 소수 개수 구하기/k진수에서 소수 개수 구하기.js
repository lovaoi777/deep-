function func1(number) {
    if(number<=1)
        return false;
     for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
        return false;
    }
  }
  return true;
}

function solution(n, k) {
    var answer =0;
    var number = n.toString(k).split('0')
    for(let i = 0 ; i<number.length;i++){
        if(func1(Number(number[i]))){
            answer++}
    }
    return answer;
}
//양의 정수 n 
// k 진수
// 0P0처럼 소수 양쪽에 0이 있는 경우
// P0처럼 소수 오른쪽에만 0이 있고 왼쪽에는 아무것도 없는 경우
// 0P처럼 소수 왼쪽에만 0이 있고 오른쪽에는 아무것도 없는 경우
// P처럼 소수 양쪽에 아무것도 없는 경우
// 단, P는 각 자릿수에 0을 포함하지 않는 소수입니다.
