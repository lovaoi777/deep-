// 1:20 ~ 1:29 
function solution(want, number, discount) {
    let answer = 0;
    const wantSet = {}
    want.forEach((meal,idx)=>{
        wantSet[meal] = number[idx]
    })

    discount.forEach((_,idx)=>{
        const discountTarget = discount.slice(idx,idx + 10)

        const copyWantSet = {...wantSet}
        discountTarget.forEach((meal)=>{
            if(copyWantSet[meal]){
                copyWantSet[meal]--
            }
            if(copyWantSet[meal] === 0){
                delete copyWantSet[meal]
            }
        })

        if(Object.keys(copyWantSet).length === 0){
            answer++
        }
    })
    return answer;
}
//1. 일정한 금액을 지불하면 10일동안 회원 자격부여 
//want.length == number 
// 치킨, 사과, 사과, 바나나, 쌀, 사과, 돼지고기, 바나나, 돼지고기, 쌀, 냄비, 바나나, 사과, 바나나