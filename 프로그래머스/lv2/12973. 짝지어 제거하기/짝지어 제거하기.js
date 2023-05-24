// function solution(s){
//     s=s.split("")
//     for(let i=0;i<s.length;i++){
//     if(s[i]===(s[i+1])){
//          s.splice(i,2)
//         i=-1
//          }
//     }
//     return s.length=== 0? 1 : 0;
// }
//성공적으로 수행할 수 있으면 1을, 아닐 경우 0을 턴해주면 됩니다.


function solution(s) {
    const stack = [];
      for(let i = 0 ; i < s.length ; i++ ){
        if( !stack.length || stack[stack.length-1] !== s[i] ) stack.push(s[i]);
          else stack.pop();
    }
  return stack.length ? 0 : 1;
}