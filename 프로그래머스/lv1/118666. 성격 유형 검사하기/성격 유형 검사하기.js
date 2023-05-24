function solution(survey, choices) {
    var answer = '';
    let MBTI = new Map();

    ["R","T","C","F","J","M","A","N"].forEach(item=>MBTI.set(item,0));
    choices.forEach((item,index)=>{
        let [A,B] = survey[index].split('');
        console.log(MBTI.get(A),item)
        if(item < 4)MBTI.set(A,MBTI.get(A)+4-item);
        else if(item>4)MBTI.set(B,MBTI.get(B)+item-4);
    })
    answer += MBTI.get("R") >= MBTI.get("T") ? "R" : "T";
    answer += MBTI.get("C") >= MBTI.get("F") ? "C" : "F";
    answer += MBTI.get("J") >= MBTI.get("M") ? "J" : "M";
    answer += MBTI.get("A") >= MBTI.get("N") ? "A" : "N";
    
    return answer;
}