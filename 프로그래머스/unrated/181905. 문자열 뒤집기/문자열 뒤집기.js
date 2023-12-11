function solution(my_string, s, e) {
    var answer = '';
    var text = my_string.slice(s,e+1).split('').reverse().join('');
    
    return my_string.replace(my_string.slice(s,e+1),text);
}