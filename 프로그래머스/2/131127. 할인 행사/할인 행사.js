function solution(want, number, discount) {
    var answer = 0;
    var map = [];
    
    want.map((e,index)=> {
        map[e]=number[index];
    })
    discount.forEach((element,index)=> { 
        var list = discount.slice(index,index+10)
        
        var choiceWant = {...map}
        list.forEach((element)=>{
            if(choiceWant[element]){
                choiceWant[element]--
            }
            if(choiceWant[element]==0){
                delete choiceWant[element]
            }
        })
      if (Object.keys(choiceWant).length==0){
          answer++
      }
    })
    return answer;
}



//     discount.forEach((_,idx)=>{
//         const discountTarget = discount.slice(idx,idx + 10)

//         const copyWantSet = {...wantSet}
//         discountTarget.forEach((meal)=>{
//             if(copyWantSet[meal]){
//                 copyWantSet[meal]--
//             }
//             if(copyWantSet[meal] === 0){
//                 delete copyWantSet[meal]
//             }
//         })

//         if(Object.keys(copyWantSet).length === 0){
//             answer++
//         }
//     })
//     return answer;