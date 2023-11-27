function solution(n)
{
    let ans = 0;
    
    while (n !== 0) {
        if (n % 2 === 1) {
            ans++;
            n -= 1;
        } else {
            n /= 2;
        }
    }

    return ans;
}

//순간이동 (현재까지 온 거리) * 2
