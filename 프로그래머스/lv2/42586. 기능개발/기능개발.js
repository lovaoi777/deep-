function solution(progresses, speeds) {
  let answer = [];

  while (progresses.length > 0) { // speed 배열길이가 0이 될때까지
    let cnt = 0;
    for (let i = 0; i < progresses.length; i++) { // progress와 speed 짝지어 더하기
      if (progresses[i] < 100) { // 100이 넘어가면 그만 더하기
        progresses[i] += speeds[i];
      }
    }
    while (progresses[0] >= 100) { // 맨앞의 progress배열이 100이 넘으면 shift
      progresses.shift();
      speeds.shift(); // speed도 shift
      cnt++;
    }
    if (cnt > 0) {
      answer.push(cnt);
    }
  }
  return answer;
}

//작업의 개수(progresses, speeds배열의 길이)는 100개 이하입니다.
//작업 진도는 100 미만의 자연수입니다.
//작업 속도는 100 이하의 자연수입니다.
//배포는 하루에 한 번만 할 수 있으며, 하루의 끝에 이루어진다고 가정합니다. 예를 들어 진도율이 95%인 작업의 개발 속도가 하루에 4%라면 배포는 2일 뒤에 이루어집니다.
