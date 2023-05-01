function solution(name, yearning, photo) {
    let map =new Map();
    let answer = [];
    name.map((element,index)=>{
        map.set(element,yearning[index]);
    })
    photo.map((element)=> { 
        let sum=0 ; 
        element.map((e)=>{
            map.has(e)===true? sum +=map.get(e) : 0;
        })
        answer.push(sum)
    })
    return answer;
}