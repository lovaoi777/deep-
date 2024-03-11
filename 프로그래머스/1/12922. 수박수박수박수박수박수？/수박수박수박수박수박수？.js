function solution(n) {
    var answer = '';
    for(let i=1;i<=n;i++){
        i%2==1? answer+='수' :  answer+='박';
    }
    return answer;
}

//2 -> 수박
//3 -> 수박수
//4 -> 수박수박 
//5 -> 수박수박수


