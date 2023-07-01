//alert ("Thanks for checking my code out.🙂")
function cl(){
if (em.value == "" || pd.value =="") {
  alert('Fill in Neccessary Fields.');
}
else{
    alert('Login Successful❤️');
    alert('Leave an upvote and Follow ❤️');
    }
}
function cleartext() {
  document.getElementById('em').value = "";
}
function cleartxt() {
  document.getElementById('pd').value = "";
}
function sigup(){
if (tx.value == "" || eml.value =="" || p.value =="") { 
  alert('Fill in Neccessary Fields.');
}
else{
    alert('Signup Successful❤️');
    alert('Leave an upvote and Follow ❤️');
    }
}
function cleartx() {
  document.getElementById('p').value = "";
}
function clearr() {
  document.getElementById('eml').value = "";
}
function clearrr() {
  document.getElementById('tx').value = "";
}
function showsignupform() {
    document.getElementById('loginform').style.display='none';
    document.getElementById('signupform').style.display='block';
}
function showloginform() {
    document.getElementById('loginform').style.display='block';
    document.getElementById('signupform').style.display='none';
}
//One step at a time.
//Still working on it.