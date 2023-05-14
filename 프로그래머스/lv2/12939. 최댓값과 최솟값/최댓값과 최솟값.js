function solution(s) {
    var answer = s.split(' ')
    var min = ''
    var max = ''
    min = Math.min.apply(null,answer)
    max = Math.max.apply(null,answer)
    return min+" "+max;
}
//+Math.max.apply(null,answer)