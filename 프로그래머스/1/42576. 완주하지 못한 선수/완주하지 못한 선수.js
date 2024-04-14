function solution(participant, completion) {
    var answer = '';
    participant.sort()
    completion.sort()
    // completion.push("");

    for(let i = 0; i < participant.length; i++) {
        if(participant[i] !== completion[i]) {
            answer = participant[i];
            break;
        }
    }
    return answer
}

//1. 마라톤에 참여한 선수들의 이름이 담긴 배열 participant
//2. 완주한 선수들의 이름이 담긴 배열 completion
//3. 완주하지 못한 선수의 이름을 return 하도록 solution 함수를 작성해주세요.