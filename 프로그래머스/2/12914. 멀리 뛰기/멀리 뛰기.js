// function solution(n) {
//     const count = 0;
//     const result = [0,1]
//     for (let i = 2; i <= n; i++) { 
//         result.push((result[i-1] + result[i-2]) % 1234567);
//     } 
//     count= result[n]
//     return n% 1234567;
// }
// return n == 1 ? 1 : b;
function solution(n) {
    var answer = 0;
    var dp=[];
    dp[1]=1;
    dp[2]=2;
    for(var i=3;i<=n;i++){
        dp[i]=dp[i-1]+dp[i-2] %1234567;
    }
    answer=dp[n];
    return answer%1234567;}