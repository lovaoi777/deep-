function solution(strings, n) {
var sortedStr = strings.sort();
    return sortedStr.sort((a, b) => a[n].charCodeAt() - b[n].charCodeAt());
}
