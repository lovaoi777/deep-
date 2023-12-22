function solution(num_list) {
    var answer = 0;
    for(let i =0 ; i<num_list.length;i++){
        var count = num_list[i]          
        while(true){
            if(count ===1){break}
            if(count%2==0){
                count=count/2;
                answer+=1
            }
            else{
                count=(count-1)/2
                answer+=1
            }
        }
    }

    return answer;
}