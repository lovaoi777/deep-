// function solution(today, terms, privacies) {
//     var answer = [];
//     let t1 = []
//     let t2 = []
//     let time = today.split('.')
//     //terms 나누기
//     for(let i=0;i<terms.length;i++){
//         let [a,b]=terms[i].split(' ')
//         t1.push(a)
//         t2.push(b)
//     }
//     privacies.map((element,index) => { 
//         let[num1,num2]=element.split(' ')
//         let sc = t1.indexOf(num2);
//         num1=num1.split('.')
//         num1[1]=Number(num1[1])+Number(t2[sc])
//         count=Number(num1[1])-12
//         if(Number(num1[1])>=13){
//             num1[1]=count
//             num1[0]=Number(num1[0])+1
//             if(num1[1]<10){
//                 num1[1]= '0' + num1[1]
//                 console.log(num1[1])
//             }
// }   
//         if(time[0]>num1[0]){
//             answer.push(index+1)
//         }
//         if(time[1]>num1[1]&&time[0]==num1[0]){
//             answer.push(index+1)
//         }
//         if(time[2]>=num1[2] &&time[1]==num1[1]&&time[0]==num1[0])
//             answer.push(index+1)
//     })
    
    
//     return answer.sort((a,b)=>a-b);
// }

function checkvalidity(today, date, validity) {
  let [y1, m1, d1] = today.split(".").map(Number),
    [y2, m2, d2] = date.split(".").map(Number);

console.log(((y1 - y2) * 12 + (m1 - m2)) * 28 + (d1 - d2) >= validity * 28)
  return ((y1 - y2) * 12 + (m1 - m2)) * 28 + (d1 - d2) >= validity * 28;
}

function solution(today, terms, privacies) {
  const answer = [];
  const map = new Map();

  for (let t of terms) {
    let [kind, validity] = t.split(" ");
    map.set(kind, +validity);
  }

  privacies.forEach((val, idx) => {
    let [date, kind] = val.split(" ");
    if (checkvalidity(today, date, map.get(kind))) answer.push(idx + 1);
  });

  return answer;
}





//today.split('.')
//n == 개인정보 개수
//today == 오늘 날짜를 의미하는 문자열
//terms == (!약관의 유효기간)을 담은 1차원 문자열 배열
//privacies) == (!수집된 개인정보)의 정보를 담은 1차원 문자열 배열
//파기해야할 개인정보의 번호를 오름차순으로 1차원 정수 배열로 담아 return 