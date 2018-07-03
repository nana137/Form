/**
 * Created by user on 2018/6/2.
 */
function objEmpty(objId){
    var objElement = document.getElementById(objId);
    var msgElement = document.getElementById(objId + "Msg");
    if(objElement.value != ""){
        objElement.className = "right";
        if(msgElement != null){
            msgElement.innerHTML = "输入正确！";
            msgElement.style.display = "green";
        }
        return true;
    }else{
        objElement.className = "wrong";
        if(msgElement != null){
            msgElement.innerHTML = "请输入！";
            msgElement.style.color = "red";
        }
        return false;
    }
}
function objRegex(objId,regex){
    var objElement = document.getElementById(objId);
    var msgElement = document.getElementById(objId + "Msg");
    if(regex.test(objElement.value)){
        objElement.className = "right";
        if(msgElement != null){
            msgElement.innerHTML = "格式正确！";
            msgElement.style.color = "green";
        }
        return true;
    }else{
        objElement.className = "wrong";
        if(msgElement != null){
            msgElement.innerHTML = "格式错误！";
            msgElement.style.color = "red";
        }
        return false;
    }
}