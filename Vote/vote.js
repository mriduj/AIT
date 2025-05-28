function vote(){
    var name=document.getElementById("name").value;
    var age=document.getElementById("age").value;
    var res=document.getElementById("res");
    if(age >= 18){
        res.innerHTML="You are eligible";
    }
    else{
        res.innerHTML="You are still a chid";
    }
}