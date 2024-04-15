function solution(prices) {
    var answer = [];
    var count = 0;
    for(let i = 0 ; i<prices.length; i++){
        if(i == prices.length -1){
            answer.push(0)
        }
        for(let j=i+1;j<prices.length;j++){
            if(prices[i]<=prices[j]){
                count++;
            }
            else if (prices[i] > prices[j]) {
                answer.push(count + 1);
                count = 0;
                break;
            }
            if(j== prices.length-1){
                answer.push(count)
                count = 0;
            }
        }
    }
    
    return answer;
}
//1초의 주가는 1이며 1초부터 5초까지 총 4초간 주가를 유지했습니다.
//2초의 주가는 2이며 2초부터 5초까지 총 3초간 주가를 유지했습니다.
//3초의 주가는 3이며 4초의 주가는 2로 주가가 떨어졌지만 3초에서 4초가 되기 직전까지의 1초간 주가가 유지 된것으로 봅니다. 따라서 5초까지 총 1초간 주가를 유지했습니다.
//4초의 주가는 2이며 4초부터 5초까지 총 1초간 주가를 유지했습니다.
//5초의 주가는 3이며 5초 이후로는 데이터가 없으므로 총 0초간 주가를 유지했습니다.

    // prices.map((e,index)=>{
    //     let count = 0;
    //     for(let i = index; i<prices.length;i++){
    //         if(index === prices.length-1){
    //             answer.push(0)
    //             break;
    //         }
    //         if(e<=prices[i]){
    //             count++;
    //         }
    //     }
    //     answer.push(count)