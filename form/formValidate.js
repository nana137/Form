/**
 * Created by user on 2018/5/31.
 */
// var valueForm = document.getElementById("username");
//            alert("内容：" + valueForm.value);  获得表单内容
//验证表单，用正则，需要开始和结束标记  /^正则$/.test(要检测的数据)

window.onload = function(){
    document.getElementById("pwd").addEventListener("blur",validatePwd,false);
    document.getElementById("conf").addEventListener("blur",validateConf,false);
    document.getElementById("email").addEventListener("blur",validateE,false);
    document.getElementById("sport").addEventListener("click",paraSingle,false);
    document.getElementById("course").addEventListener("click",paraManyCheck,false);
    document.getElementById("courseAll").addEventListener("click",paraSelectAllCheck,false);
    document.getElementById("city").addEventListener("change",paraSelectBox,false);
    document.getElementById("note").addEventListener("keypress",paraTextArea,false);
    document.getElementById("note").addEventListener("keydown",paraTextArea,false);
};
//验证邮箱格式
function validateEmail(objName){
    var objElement = document.getElementById(objName);
    var msgElement = document.getElementById(objName + "Msg");
    if(/^\w+@\w+\.\w+$/.test(objElement.value)){
        objElement.className = "right";
        msgElement.innerHTML = "邮箱输入正确！";
        msgElement.style.color = "green";
        return true;
    }else{
        objElement.className = "wrong";
        msgElement.innerHTML = "邮箱格式错误！";
        msgElement.style.color = "red";
        return false;
    }
}
function validateE(){
    return validateEmail("email");
}
//密码和确认密码是否一致


function validateEmpty(elementName){
    var objElement = document.getElementById(elementName);
    var msgElement = document.getElementById(elementName + "Msg");
    if(objElement.value != ""){
        objElement.className = "right";
        msgElement.style.color = "green";
        msgElement.innerHTML = "正确！";
        return true;
    }else{
        objElement.className = "wrong";
        msgElement.innerHTML = "请输入密码！";
        msgElement.style.color = "red";
        return false;
    }
}
function validateRepeat(orgName,tarName){
    var orgElement = document.getElementById(orgName);
    var tarElement = document.getElementById(tarName);
    var msgElement = document.getElementById(tarName + "Msg");
    if(orgElement.value == tarElement.value){
        msgElement.style.color = "green";
        msgElement.innerHTML = "与初次密码一致！";
        tarElement.className = "right";
        return true;
    }else{
        tarElement.className = "wrong";
        msgElement.innerHTML = "与初次密码不一致，请重新输入！";
        msgElement.style.color = "red";
        return false;
    }
}
function validatePwd(){
    return validateEmpty("pwd");
}
function validateConf(){
    if(validateEmpty("conf")){
        return validateRepeat("pwd","conf");
    }
    return false;
}

// 单选框
function singleCheck(objName){
    var single = document.getElementsByName(objName);
    for(var i = 0;i < single.length;i ++){
        if(single[i].checked){
            alert("最喜欢的运动是：" + single[i].value);
        }
    }
}
function paraSingle(){
    return singleCheck("sport");
}

// 复选框
function manyCheck(objName){
    var manyCheckElement = document.getElementsByName(objName);
    var str = "所选课程：";
    for(var i = 0;i < manyCheckElement.length;i ++){
        if(manyCheckElement[i].checked){
            str += manyCheckElement[i].value + "、";
        }
    }
    alert(str);
}
function selectAllCheck(objName,objId){
    var allCheck = document.getElementsByName(objName);
    for(var i = 0;i < allCheck.length;i ++){
        allCheck[i].checked = document.getElementById(objId).checked;
    }
}
function paraSelectAllCheck(){
    return selectAllCheck("course","courseAll");
}
function paraManyCheck(){
    return manyCheck("course");
}

// 下拉列表框
function selectBox(objId){
    var objElement = document.getElementById(objId);
    alert("你的家乡：" + objElement.value);
}
function paraSelectBox(){
    return selectBox("city");
}

//文本域
function textArea(objId,submitId){
    var objElement = document.getElementById(objId);
    var msgElement = document.getElementById(objId + "Msg");
    var len = objElement.value.length;
    var submitElement = document.getElementById(submitId);
    if(len <= 10){
        msgElement.innerHTML = "您还可以输入:" + (10 - len) + "个字";
        submitElement.disabled = "";
    }else{
        msgElement.innerHTML = "您输入的字数超过限制！";
        msgElement.style.color = "red";
        submitElement.disabled = true;
    }
}
function paraTextArea(){
    return textArea("note","textArea");
}

// 警告框
function deleteConfirm(){
    return window.confirm("确定删除邮件吗？");
}
//用户输入框
function usePrompt(){
    var str = window.prompt("请输入你的名字：","姓名是：");
    document.write(str);
}
// 弹框Open
window.open("yanzheng.html","AD页","width=200;height:10;scrollBars=yes;resizeable=no");
// 重定向location
function go(url){
    window.location = url;
}