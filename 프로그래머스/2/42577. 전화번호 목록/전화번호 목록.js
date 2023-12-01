// function solution(phone_book) {
//     var answer = true;
//     var count = [];
//     phone_book=phone_book.sort((a,b)=>b-a)
//     for(let i =0 ; i<phone_book.length;i++){
//         console.log(count.includes(phone_book[i]),count,phone_book[i])
//         if(count.includes(phone_book[i])==true){
//             return false;
//         }
//         else{
//             count.push(phone_book[i])
//         }
//     }
//     // console.log(count.includes(count[2]))
//     return answer;
// }
function solution(phone_book) {
    let answer = phone_book.sort().some((value, index, self) => self[index + 1]?.indexOf(value) === 0);

    return !answer;
}