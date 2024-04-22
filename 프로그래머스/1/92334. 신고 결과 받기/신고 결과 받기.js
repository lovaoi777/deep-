function solution(id_list, report, k) {
    var answer = [];
    var User = {}
    var EUser = {} //정지 유저 
    var result = [];
 //객체 생성
    id_list.map((e)=>{
        User[e] = []
        EUser[e] = 0
    }) 

    //객체 배열 구조 분해
        report.map((e)=>{
            let [a,b] = e.split(' ')
            if(User[a].includes(b)==false){ //중복제거
            User[a].push(b) 
            EUser[b] += 1
                }
        })
        // console.log(User,EUser)
    //정지 유저 찾기
    id_list.map((e)=>{
        if(EUser[e] >= k)
            answer.push(e)
    })
    console.log(answer)
    id_list.map((user)=> { 
        var sum =0
        answer.map((e)=>{
            if(User[user].includes(e))
              sum+=1
        })
        result.push(sum)
    })
    return  result;
}
