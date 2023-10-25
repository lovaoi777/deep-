function solution(numbers) {
    var answer = [];
    var temp=[]
    for(let i = 0; i < numbers.length;i++){
        for(let j=i+1;j < numbers.length;j++ ){
            temp.push(numbers[i]+numbers[j])
        }
    }
    console.log(temp)
    answer=[...new Set(temp)]
    return answer.sort((a,b)=>a-b)
}