



function checkvalidity(today, date, validity) {
  let [y1, m1, d1] = today.split(".").map(Number),
    [y2, m2, d2] = date.split(".").map(Number);

console.log(((y1 - y2) * 12 + (m1 - m2)) * 28 + (d1 - d2) >= validity * 28)
  return ((y1 - y2) * 12 + (m1 - m2)) * 28 + (d1 - d2) >= validity * 28;
}

function solution(today, terms, privacies) {
  const answer = [];
  const map = new Map();

  for (let t of terms) {
    let [kind, validity] = t.split(" ");
    map.set(kind, +validity);
  }

  privacies.forEach((val, idx) => {
    let [date, kind] = val.split(" ");
    if (checkvalidity(today, date, map.get(kind))) answer.push(idx + 1);
  });

  return answer;
}





//today.split('.')
//n == 개인정보 개수
//today == 오늘 날짜를 의미하는 문자열
//terms == (!약관의 유효기간)을 담은 1차원 문자열 배열
//privacies) == (!수집된 개인정보)의 정보를 담은 1차원 문자열 배열
//파기해야할 개인정보의 번호를 오름차순으로 1차원 정수 배열로 담아 return 