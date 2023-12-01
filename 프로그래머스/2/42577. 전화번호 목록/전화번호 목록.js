function solution(phoneBook) {
    var answer = true;
    answer =phoneBook.sort().some((value,index,arr)=>arr[index+1]?.indexOf(value)==0)
    return !answer;
}