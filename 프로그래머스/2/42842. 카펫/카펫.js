function solution(brown, yellow) {
    var answer = [];
    var sum =  brown + yellow 
    //최소의 세로의 길이는 3칸
    for(let height =3;height <=brown; height++){
        if(sum % height === 0){
            //가로 길이
            var weight = sum / height ;
            if((height-2) * (weight-2) === yellow){
               return  [weight,height]
            }
        }
    }
    return answer;
}