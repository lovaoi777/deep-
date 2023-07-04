function solution(today, terms, privacies) {
    var answer = [];
    
    // var [a,b,c] = today.split('.')
    var day = new Date(today)
    
    //유효기간을 객체형태로 지정
    var termType= {};
    terms.map((e)=>{
        var [num1 , num2] = e.split(' ')
        termType[num1] = Number(num2);
    })
    
    
    privacies.map((e,index)=>{
       var [selectTime , choice] = e.split(' ')
       var select = new Date(selectTime);
       select.setMonth(select.getMonth() + termType[choice])  
       select <= day ? answer.push(index+1) : ''
           })
    
    
          
//        terms.map((q)=>{
//         var [n,m] = q.split(' ')
//         var dedTime = new Date(z,x+m,c)
//         })
    return answer;
}