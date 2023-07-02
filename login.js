/*var lg = document.getElementById("lgbtn");
var emlgval= document.getElementById("emlg");
var pdlgval = document.getElementById("pdlg");

lg.onclick= function() {
    if(emlgval.value=="" || pdlgval.value==""){
        alert(`Fill in Neccessary Fields`);
    }
    else{
        alert('Login Successful');
    }
}*/
function checklg(){
     if(emlg.value=="" || pdlg==""){
         alert('Fill up necessary fields');
     }
     else{
         alert("Login Successful");
     }
}
function checksg(){
     if(sgname.value=="" || sgemail=="" || sgpd==""){
         alert('Fill up necessary fields');
     }
     else{
         alert("Signup Successful");
     }
}
function showlogin() {
    document.getElementById("lgbox").style.display="block";
    document.getElementById("sgbox").style.display="none";
}
function showsignup() {
    document.getElementById("lgbox").style.display="none";
    document.getElementById("sgbox").style.display="block";
}
