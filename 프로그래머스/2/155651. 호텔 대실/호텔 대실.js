function solution(book_time) {
    var answer = 0;
    let room = [] ;
    book_time = book_time.sort()
    //문자 ->  분으로 변환
    book_time.map((e)=> { 
    let [startTime , finishTime] = e;
    let [start_hour , start_min] = startTime.split(':');
    let [finish_hour , fnish_min] = finishTime.split(':');
    let stime = Number(start_hour * 60) + Number(start_min);
    let ftime = Number(finish_hour * 60) + Number(fnish_min)+10;   
 
    console.log(stime,ftime )
    const idx = room.findIndex(x => x <= stime);
    console.log(idx)
    if(idx === -1) {
            room.push(ftime)
        } else {
            room[idx] = ftime;
        }
    }
                 )
           return room.length
        
}