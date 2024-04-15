// // //귤의 사야하는 개수
// // //tangerine 귤의 크기

function solution(k, tangerine) {
  let map = {};

  tangerine.forEach((item)=> map[item] = (map[item] || 0) +1);

  const sortArr = Object.values(map).sort((a,b) => b-a)
  console.log(sortArr)
  let cnt = 0;
  while(k>0) {
    cnt++;
    k-=sortArr.splice(0,1)[0];
  }
  return cnt;
}


// function solution(k, tangerine) {
//     return '';
// }
