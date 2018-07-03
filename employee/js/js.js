/**
 * Created by user on 2018/6/1.
 */
window.onload = function(){
    document.getElementById("empNo").addEventListener("blur",paraEmpNo,false);
    document.getElementById("empName").addEventListener("blur",paraEmpName,false);
    document.getElementById("empJob").addEventListener("blur",paraEmpJob,false);
    document.getElementById("empSalary").addEventListener("blur",paraEmpSalary,false);
    document.getElementById("empBonus").addEventListener("blur",paraEmpBonus,false);
    document.getElementById("submit").addEventListener("click",paraValidate,false);
};
function paraEmpNo(){
    return objRegex("empNo",/^\d{4}$/);
}
function paraEmpName(){
    return objEmpty("empName");
}
function paraEmpJob(){
    return objEmpty("empJob");
}
function paraEmpSalary(){
    return objRegex("empSalary",/^\d+(\.\d{1,2})?$/);
}
function paraEmpBonus(){
    return objRegex("empBonus",/^\d+(\.\d{1,2})?$/);
}
function paraValidate(){
    return paraEmpNo() &&
        paraEmpName() &&
        paraEmpJob() &&
        paraEmpSalary() &&
        paraEmpBonus();
}

