function solution(priorities, location) {
    var answer = 0;
    var list=[]
    var max = Math.max(...priorities)
    for(let i = 0; i<priorities.length;i++){
        list.push(i)
    }
    while(priorities.length != 0){
        max = Math.max(...priorities)
        if(priorities[0]<max){
            priorities.push(priorities.shift())
            list.push(list.shift());
        }
        else { 
            answer+=1;
            priorities.shift();
            if(list.shift() == location)
                return answer;
        }
    }
}