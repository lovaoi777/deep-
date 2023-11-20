function solution(s) {
    var answer = '';
    var avg = s.length/2;
        if(s.length%2==0){
            answer=s[avg-1]+s[avg]
        }
        else{
            avg=Math.round(avg);
            answer=s[avg-1];
        }
        
    return answer;
}