// function solution(friends, gifts) {
//     var answer = 0;
//     var User = {}; //선물 준사람
//     var postgift = {};
//     var getgift={};
//     //friends 정리
//     friends.map((e)=>{
//         User[e]={}
//         postgift[e]=0
//         getgift[e]=0
//     })
//     //선물 
//     gifts.map((e)=>{
//         let [PostUser, GetUser] = e.split(' ')
//         // User[PostUser].push(GetUser)
//         postgift[GetUser] +=1 
//         getgift[PostUser] +=1;
//     })  
//     console.log(User)
//     return answer;
// }

2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
function solution(friends, gifts) {
  let answer = {}
  let statistic = {}
  let idxStatistic = {}
  for (const name of friends) {
    answer[name] = 0
    statistic[name] = 0
    idxStatistic[name] = {}
    for (const sub of friends) {
      if(name !== sub){
        idxStatistic[name][sub] = 0
      }
    }
  }
  for (const cur of gifts) {
    let [from,to] = cur.split(' ')
    statistic[from] = statistic[from]+1
    statistic[to] = statistic[to]-1
    idxStatistic[from][to] = idxStatistic[from][to]+1
  }
  for (const from in idxStatistic) {
    for (const to in idxStatistic[from]) {
      if(idxStatistic[from][to] === 0 && idxStatistic[to][from] === 0 || idxStatistic[from][to] === idxStatistic[to][from]){
        if(statistic[from] > statistic[to]){
          answer[from] = answer[from]+1
        }
      }else{
        if(idxStatistic[from][to] < idxStatistic[to][from]){
          answer[to] = answer[to]+1
        }else if(idxStatistic[to][from] > idxStatistic[from][to]){
          answer[from] = answer[from]+1
        }
      }
    }
  }
  answer = Math.max(...Object.values(answer))
  return answer
}
