// function solution(n) {
//     var count = 0;
//     var result = []
//     result[1]=1
//     result[2]=2
//     for (let i = 3; i <= n; i++) { 
//         result.push(result[i-1] + result[i-2] %1234567);
//     } 
//     count=result[n];
//     return count%1234567;
// }
function solution(n){
    var answer = 0;
    var result = [];
    result[1]=1;
    result[2]=2;
    for(let i =3;i<= n ; i++){
        result.push(result[i-1]+ result[i-2]% 1234567)
    }
    answer = result[n]
    return answer% 1234567;
}