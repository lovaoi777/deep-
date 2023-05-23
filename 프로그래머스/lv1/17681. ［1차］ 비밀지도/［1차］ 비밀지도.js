
function solution(n, arr1, arr2) {
    let answer = [];
    arr1.map((value, idx) => {
        answer.push((value | arr2[idx]).toString(2).padStart(n, "0"))
    })
    return answer.join(",").replace(/1/g, "#").replace(/0/g, " ").split(",");
}
