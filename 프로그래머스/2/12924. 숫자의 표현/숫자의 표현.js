function solution(n) {
    var count=0;
    for(let i = 0; i <=n;i++){
        if ( n % i === 0 && i % 2 === 1 )   
            count++
    }
    return count;
}
// //   var sum=0;
//         for(let j =i;j<=n;j++){
//             sum+=j;
//             if(sum===15){
//                 count++;
//                 break;
//             }