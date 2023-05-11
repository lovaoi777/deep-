function solution(k, m, score) {
    let answer = [] ; 
    let result = 0;
    let apple = score.sort((a,b)=>b-a);
    for(let i = 0; i < apple.length; i=i+m){
        answer.push(apple.slice(i,i+m))
    }
    answer.map((e,index)=>{
        e.length===m ? result += (e[m-1] *e.length)  : 0
    })
    return result;
}
//사과의 최대 점수 k
//한 상자에 들어가는 사과의 수  m 
//사과들의 점수 score
//최저점수 * 한상자 담긴 사과 개수 * 상자의 개수 
//남은 상자는 버린다.

