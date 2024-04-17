// function solution(land) {
//     var answer = 0;
//     var result = []
//     // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
//     for(let i = 0 ; i< land[0].length;i++){
//         for(let j = 0 ; j<land[1].length;j++){
//             if(j == i ){
//                 continue;
//             }
//             for(let z = 0 ;z<land[1].length;z++ ){
//                 if(j==z){
//                     continue;
//                 }
//                 result.push(land[0][i]+ land[1][j]+land[2][z])
//             }
//         }
//     }

//     return Math.max.apply(null,result);
// }
function solution(land) {

    // 이차원 배열 생성
    const dp = Array.from({length : land.length}, () => Array(4).fill(0));

    dp[0] = land[0];
    for(let i = 0; i< land.length - 1; i++){
        for(let j = 0; j < 4; j++)
            for(let k = 0; k < 4; k++){
                if(j===k)
                    continue;
                const temp = dp[i][j] + land[i+1][k];
                if(temp > dp[i+1][k])
                    dp[i+1][k] = temp;
            }
    }
    return Math.max(...dp.at(-1));
}