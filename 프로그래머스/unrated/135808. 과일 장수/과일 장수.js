function solution(k, m, score) {
    var answer = 0;
   score.sort((a, b) => b - a); //1.
    let arr=[];
  for(let i=0; i<score.length; i+=m) {
      arr.push(score.slice(i, i+m)); //2.
  }
    for(let j=0; j<arr.length; j++){// 3.
        if(arr[j].length ===m){ //4.
           answer+= arr[j][m-1]*m; //5.
        }
    }
    return answer;
}
