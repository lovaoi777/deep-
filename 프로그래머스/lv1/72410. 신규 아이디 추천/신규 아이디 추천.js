function solution(new_id) {
    var answer = '';
    let list =[];
    //1단계 소문자로 변환
    new_id = new_id.toLowerCase();
    console.log(`1단계 , ${new_id}`)
    //2. 문자 제거  특수문자  ... , .. -> . 변걍
    // new_id = new_id.replace(!/^[a-z,1-9,'-','_','.']/g,'')
    new_id=new_id.match(/[\w\.\-]+/g).join('')
            console.log(`2단계 , ${new_id}`)
    new_id = new_id.replace(/\.+/g,'.')
        console.log(`3단계 , ${new_id}`)
    if(new_id[0] == '.')
        new_id=new_id.slice(1,new_id.length)
    else if(new_id[new_id.length-1]=='.')
        new_id=new_id.slice(0,new_id.length-1)
    console.log(`4단계 , ${new_id}`)
    new_id= new_id.trim()
    if(new_id == '')
        new_id='a'
    console.log(`5단계 , ${new_id}`)
    new_id=new_id.slice(0,15)
    if(new_id[new_id.length-1]=='.')
        new_id=new_id.slice(0,new_id.length-1)
    console.log(`6단계 , ${new_id}`)
    for(let i = 0; i < 3;i++){
        if(new_id.length <3){
            new_id += new_id[new_id.length-1]
            console.log(new_id)
        }
    }
    return new_id;
}
