function solution(t, p) {
    var answer = 0;
    for(let i=0;i<t.length-p.length+1;i++){
         let num = t.split('').slice(i,i+p.length).join('')
         console.log(num)
         num<=p ? answer+=1 :0
    }
    return answer;
}