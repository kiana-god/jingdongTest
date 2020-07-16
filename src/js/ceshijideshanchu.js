


function isUser(){
    //非数字开头，并且6-16位
    var reg = /^[_a-zA-Z]\w{5,16}$/
    if(reg.test($("#userId").val())){
        $("#userId")[0].nextElementSibling.innerHTML="√，创建正确"
        isRight[0]=1;
    }else{
        $("#userId")[0].nextElementSibling.innerHTML="×，请重新输入"
        isRight[0]=0
    }
}
function isPass(){
    //数字、字母、下划线组成，并且6-16位
    var reg = /^[\da-zA-Z]{6,16}$/
    if(reg.test($("#userPass").val())){
        $("#userPass")[0].nextElementSibling.innerHTML="√，密码创建正确"
        isRight[1]=1;
    }else{
        $("#userPass")[0].nextElementSibling.innerHTML="×，请按要求重新输入"
        isRight[1]=0
    }        
}
function isPass2(){
    //数字、字母、下划线组成，并且6-16位
    var reg = /^[\da-zA-Z]{6,16}$/
    //保证重复密码符合密码的规范

    if(reg.test($("#userRePass").val())){
        $("#userRePass")[0].nextElementSibling.innerHTML="√，创建正确"
        isRight[2]=1;
    }else{
        $("#userRePass")[0].nextElementSibling.innerHTML="×，请按要求重新输入"
        isRight[2]=0
        return
    }

    if($("#userPass").val()==$("#userRePass").val()){
        $("#userRePass")[0].nextElementSibling.innerHTML="√，创建正确"
        isRight[2]=1;
    }else{
        $("#userRePass")[0].nextElementSibling.innerHTML="×，请按要求重新输入"
        isRight[2]=0
    }
}


$("#userId").blur(function(){
    isUser()
    $.get("./php/checkUser.php",{"username":this.value},(str)=>{
        //str是后端响应回来的数值
        if(str=="1"){
            this.nextElementSibling.innerHTML = "抱歉，该用户名已被注册"
        }else if(str=="0"){
            this.nextElementSibling.innerHTML = "用恭喜，该用户名未被注册"

        }
    })
})
