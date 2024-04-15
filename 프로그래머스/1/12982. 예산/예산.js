function solution(d, budget) {
    var answer = 0;
    var total = 0;

    d.sort((a, b) => a - b).forEach(price => {
        if(total + price <= budget) {
            total += price; 
            answer++;
        }
    });

    return answer;
}

//1. 부서별로 신청한 금액이 들어있는 배열 d
//2.  예산 budget이 매개변수로 주어질 때, 최대 몇 개의 부서에 물품을 지원할 수 있는지
//3. return 하도록 solution 함수