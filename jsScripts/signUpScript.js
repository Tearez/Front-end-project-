var $password = $("#password");
var $confirmPassword = $("#confirm_password")
//Hide hints
$("#signup form span").hide();

function isPasswordValid () {
  return $password.val().length > 8;
} 

function arePasswordsMatching () {
  return $confirmPassword.val() === $password.val();
} 

function canSubmit() {
  return isPasswordValid() && arePasswordsMatching();
} 

function passwordEvent(){
    //Find out if password is valid  
    if(isPasswordValid()) {
      //Hide hint if valid
      $password.next().hide("slow");
    } else {
      //else show hint
      $password.next().show("slow");
    }
}

function confirmPasswordEvent(){
    //Find out if password is valid  
    if(arePasswordsMatching()) {
      //Hide hint if valid
      $confirmPassword.next().hide("slow");
    } else {
      //else show hint
      $confirmPassword.next().show("slow");
    }
}
function enableSubmitEvent(){
  
  $("#signup #submit").prop("disabled", !canSubmit());

}
//When event happens on password input
$password.focus(passwordEvent).keyup(passwordEvent).keyup(confirmPasswordEvent).keyup(enableSubmitEvent);
$confirmPassword.focus(confirmPasswordEvent).keyup(confirmPasswordEvent).keyup(enableSubmitEvent);
enableSubmitEvent();

 