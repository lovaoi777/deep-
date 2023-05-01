function solution(n, m, section) {
    let answer  = 1;
    let start = section[0]
    section.map((e)=>{
        if( start + m-1 <e){
            start=e
            answer+=1
        
        }
    })
    return answer;
}