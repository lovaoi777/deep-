// function solution(n, words) {
//     var answer = [0,0];
//     var count = words[0].charAt(words[0].length-1)
//     var text = []
//     text.push(words[0])
//     for(let i = 1 ; i <=words.length;i++){
//         if(text.includes(words[i])){
//             return  [ i % n + 1, Math.floor((i) / n) + 1]
//         }
//         if(count==words[i].charAt()){ 
//             count = words[i].charAt(words[i].length-1)
//             text.push(words[i])
//         }
//         else { 
//             return  [ i % n + 1, Math.floor((i) / n) + 1]
//         }

//         if(i==words.length-1){
//             return [0,0]
//         }
//     }
//     return answer;
// }


// 끝말잇기에 참여하는 사람의 수 n은 2 이상 10 이하의 자연수입니다.
// words는 끝말잇기에 사용한 단어들이 순서대로 들어있는 배열이며, 길이는 n 이상 100 이하입니다.
// 단어의 길이는 2 이상 50 이하입니다.
// 모든 단어는 알파벳 소문자로만 이루어져 있습니다.
// 끝말잇기에 사용되는 단어의 뜻(의미)은 신경 쓰지 않으셔도 됩니다.
// 정답은 [ 번호, 차례 ] 형태로 return 해주세요.
// 만약 주어진 단어들로 탈락자가 생기지 않는다면, [0, 0]을 return 해주세요.
function solution(n, words) {
    var StartText = words[0].charAt(words[0].length-1)
    var TextList = [];
    TextList.push(words[0])
    var answer = [0,0]
    for(let i = 1 ;  i<= words.length;i++ ){
        if(TextList.includes(words[i])){
            return  [ i % n + 1, Math.floor((i) / n) + 1]
        }
        if(StartText==words[i].charAt()){ 
             StartText = words[i].charAt(words[i].length-1)
             TextList.push(words[i])
         }
        else { 
            return  [ i % n + 1, Math.floor((i) / n) + 1]
        }

        if(i==words.length-1){
            return [0,0]
        }
    }
    
    // for(let i = 0 ; i <= words.length; i ++){
    //     var leg2 = words[i].charAt(words[i].length-1)
    //     console.log(leg2)
    // }
    
    return answer 
}