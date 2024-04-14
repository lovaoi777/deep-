function solution(keymap, targets) {
    const minKeypad = {}
    keymap.forEach((keySet)=>{
        keySet.split('').forEach((key,idx)=>{
            if(minKeypad[key] === undefined){
                minKeypad[key] = idx + 1
            }
            else{
                minKeypad[key] = Math.min(minKeypad[key] , idx + 1)
            }
        })
    })

    const unFilterAnswer = targets.map((target) => 
        target.split('').reduce((acc,val)=>{
        return  acc+minKeypad[val]
    },0))

    const filterAnswer = unFilterAnswer.map(minTried=>{
        return isNaN(minTried) ? -1 : minTried
    })

    return filterAnswer
}