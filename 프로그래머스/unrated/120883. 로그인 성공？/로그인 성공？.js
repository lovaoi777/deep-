function solution(id_pw, db) {
    var answer = '';
    var[ID, PW] = id_pw
    
    for(let i =0; i<db.length;i++){
        if(db[i][0]==ID){
            if(db[i][1]==PW){
                answer= "login"
                break;}
            else{
                answer= "wrong pw"
                break;    
            }
        }
        else
            answer="fail"
    }
    
    
    return answer
}
