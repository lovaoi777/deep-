function solution(numbers, hand) {
    let answer = ''
    let keypad = [['1','2','3'],['4','5','6'],['7','8','9'],['*','0','#']]
    let leftHand = [0,3]
    let rightHand = [2,3]
    let numberPosition = []
    
    numbers.map(v => {
        let leftDistance, rightDistance = 0
        numberPosition = v == 0 ? [1,3] : [keypad[Math.floor((v-1)/3)].findIndex(key => key == v),Math.floor((v-1)/3)]
        leftDistance = Math.abs(leftHand[0] - numberPosition[0]) + Math.abs(leftHand[1] - numberPosition[1])
        rightDistance = Math.abs(rightHand[0] - numberPosition[0]) + Math.abs(rightHand[1] - numberPosition[1])
        
        
        if(numberPosition[0] == 0) {
            answer += 'L'
            leftHand = numberPosition
        } else if(numberPosition[0] == 2) {
            answer += 'R'
            rightHand = numberPosition
        } else {
            if(leftDistance > rightDistance) {
                answer += 'R'
                rightHand = numberPosition
            } else if(leftDistance < rightDistance) {
                answer += 'L'
                leftHand = numberPosition
            } else {
               if(hand == 'right') {
                   answer += 'R'
                   rightHand = numberPosition
               } else if(hand == 'left') {
                   answer += 'L'
                   leftHand = numberPosition
               }
            }
        }
        

    })
    return answer
}
//내가 푼거
//function solution(numbers, hand) {
//     var answer = '';
//      var left = [1,4,7]
//      var center = [2,5,8,0]
//      var right = [3,6,9]
//      var lefthand =0, righthand = 0
//      var hander = hand=='left'? 'L' : 'R';
//      numbers.map((e,index)=>{
//          if(left.includes(e)){
//              answer+='L'
//              lefthand = e
//          }
//          else if(right.includes(e)){
//              answer+='R'
//              righthand = e
//          }
//          else if(center.includes(e)){
//              let a= 0
//              let b =0
//              center.includes(lefthand)?a = Math.abs(center.indexOf(lefthand)-center.indexOf(e)):a=Math.abs(lefthand-e)
//              center.includes(righthand)?b = Math.abs(center.indexOf(righthand)-center.indexOf(e)):b =Math.abs(righthand-e)
//              if((lefthand ==1 && righthand ==3)||(lefthand ==4 && righthand ==6)||(lefthand ==7 && righthand ==9)){
//                  answer+=hander
//                  hander == 'L' ?   lefthand = e : righthand = e
//              }
//              else if(a < b){
//                  answer+='L'
//                 lefthand = e
//              }
//              else if(b< a){ 
//                     answer+='R'
//                     righthand = e
//              }
//              else if(a==b){
//                  answer+=hander
//                 hander == 'L' ?   lefthand = e : righthand = e
//              }
//          }
//      })
//     return answer;
// }