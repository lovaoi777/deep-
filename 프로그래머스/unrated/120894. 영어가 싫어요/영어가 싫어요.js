function solution(numbers) {
    var answer = ''; 
    var input='';
    var array = [ "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine" ]
    numbers=numbers.split('')
    for(let i = 0 ; i<numbers.length; i ++ ){
        input+=numbers[i]
        if(array.includes(input)){
            answer += String(array.indexOf(input))
            input=''
        }
    }
    return Number(answer);
}