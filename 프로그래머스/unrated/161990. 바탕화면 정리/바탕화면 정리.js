function solution(wallpaper) {
    var answer = [];
    var min = [];
    wallpaper.map((e)=>{
        e=e.split('')
        answer.push(e)
    })
    answer.map((e,index1)=>{
        e.map((shap,index2)=>{
             if(shap=='#'){
                min.push([index1,index2,index1+1,index2+1])
             }
        })
    })
    console.log(min)
    let result = [min[0][0]]
    let a = [min[0][1]]
    let b = [min[0][2]]
    let c = [min[0][3]]
    min.map((e)=>{
        a>e[1]?a=e[1]:''
        b<e[2]?b=e[2]:''
        c<e[3]?c=e[3]:''
    })
    result.push(a,b,c)
    let newArray2 = [].concat(...result);
    return newArray2;
}