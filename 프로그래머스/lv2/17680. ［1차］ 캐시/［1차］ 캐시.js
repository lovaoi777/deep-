function solution(cacheSize, cities) {
  var answer = 0;
  let cache = [];
  //캐시 크기가 0인 경우는 따로 처리
  if (cacheSize === 0) return cities.length * 5;

  while (cities.length) {
    const city = cities.shift().toLowerCase();
    if (cache.includes(city)) {
      cache.splice(cache.indexOf(city), 1);
      cache.push(city);
      answer += 1;
    } else {
      if (cache.length === cacheSize) {
        cache.shift();
      }
      cache.push(city);
      answer += 5;
    }
  }
  return answer;
}
//캐시 크기   cacheSize = 정수
//도시이름배열 cities    0<= cacheSize <= 30


//조건
//LRU
//cache hit 일 경우 실행시간은 1이다
//cache miss 일 경우 실행시간은 5이다

