function solution(citations) {
    citations = citations.sort((a, b) => b - a);
    console.log(citations)
    let i = 0;
    while (i + 1 <= citations[i]) {
        i++;
    }
    return i;
}