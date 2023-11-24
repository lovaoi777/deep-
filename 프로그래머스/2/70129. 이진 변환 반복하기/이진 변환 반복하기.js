function solution(s) {
    var answer = [];
    // console.log(s.replace(/0/g,'').length.parseInt(s,2))
    let i=0;
    let count=0;
    while(1){
        if(s=='1'||s=='0'){ 
            answer.push(i,count)
            break;
        }
        i++
        s.split('').map((e)=>( e=='0'?count=count+1:''))
        console.log(s)
        s= s.replace(/0/g,'').length.toString(2)

    }
    return answer;
}