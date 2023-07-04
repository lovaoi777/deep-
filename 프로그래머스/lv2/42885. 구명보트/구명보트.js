// //1차 코드
// function solution(people, limit) {
//     var answer = 0;
//     var list = people.sort();
//     for(let i = 0; i < people.length;i++){
//         if(list[i] + list[i+1] <=limit){
//             continue;
//         }
//         else{
//             console.log(list[i])
//             answer+=1;
//         }
//     }
    
//     return answer;
// }

//2차 코드
function solution(people, limit) {
    var answer = 0;
    var list = people.sort((a, b)=> a - b); // 오름차순
    
    while(list.length !== 0 ){
        if(list[0] + list[list.length-1] <= limit){
            list.shift();
            list.pop();
            answer++;
        }else{
            list.pop();
            answer++;
        }
    }
    
    
    return answer;
}
