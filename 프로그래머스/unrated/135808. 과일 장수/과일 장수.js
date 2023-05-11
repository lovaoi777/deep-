function solution(k, m, score) {
    let answer = [] ; 
    let apple = score.sort();
    for(let i = 0; i < apple.length; i=i+m){
        answer.push(apple.slice(i,i+m))
    }
    answer.map((e)=>{
        console.log(Math.min(e))
    })
    console.log(Math.min(answer))
    return answer;
}
//사과의 최대 점수 k
//한 상자에 들어가는 사과의 수  m 
//사과들의 점수 score
//최저점수 * 한상자 담긴 사과 개수 * 상자의 개수 








// function solution(k, m, score) {
//     var answer = 0;
//    score.sort((a, b) => b - a); //1.
//     let arr=[];
//   for(let i=0; i<score.length; i+=m) {
//       arr.push(score.slice(i, i+m)); //2.
//   }
//     for(let j=0; j<arr.length; j++){// 3.
//         if(arr[j].length ===m){ //4.
//            answer+= arr[j][m-1]*m; //5.
//         }
//     }
//     return answer;
// }
